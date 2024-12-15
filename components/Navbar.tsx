import Link from "next/link";
import Image from "next/image";
import {auth, signOut, signIn} from "@/auth";

export const Navbar = async () => {
    const session = await auth();

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex items-center justify-between">
                <Link href="/public">
                    <Image src={"/logo.png"} alt={"logo"} width={144} height={30} />
                </Link>

                <div className={"flex items-center gap-5 text-black"}>
                    {session && session.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <form action={async () => {
                                "use server";
                                await signOut({redirectTo: "/"});
                            }}>
                                <button type={"submit"}>Logout</button>
                            </form>
                            <Link href={`/user/${session?.user.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        // была проблема с тем, что нельзя юзать серверное действие на клиенте. Я у себя не обнаружил этого
                        <button onClick={async () => {
                            "use server";

                            await signIn("github");
                        }}>
                            <span>Login</span>
                        </button>
                    )}
                </div>
            </nav>
        </header>
    )
}