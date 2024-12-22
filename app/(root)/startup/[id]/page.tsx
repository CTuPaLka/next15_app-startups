import {STARTUP_QUERY_BY_ID} from "@/sanity/lib/queries";
import {sanityFetch} from "@/sanity/lib/live";
import {client} from "@/sanity/lib/client";
import {notFound} from "next/navigation";

export const experimental_ppr = true

const StartupPage = async ({params}: {params: Promise<{ id: string }>}) => {
    const id = (await params).id;
    // const data = sanityFetch({ query: STARTUP_QUERY_BY_ID, params: { id } })
    const post = await client.fetch(STARTUP_QUERY_BY_ID, { id })

    if (!post) return notFound();

    return (
            <h1 className={`text-3xl`}>{post.title}</h1>
        )
}

export default StartupPage;