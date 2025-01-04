import {client} from "@/sanity/lib/client";
import {STARTUPS_BY_AUTHOR_QUERY} from "@/sanity/lib/queries";
import {StartupCard, StartupCardType} from "@/components/StartupCard";
import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";

export const UserStartups = async ({ id }: { id: string }) => {
    const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id })

    return (
        <>
            {startups.length > 0 ? (
                startups.map((startup: StartupCardType) => (
                <StartupCard post={startup} key={startup._id}/>
            ))) : (
                <p className={`no-result`} >No posts yet</p>
            )}
        </>
    )
}

export const StartupCardSkeleton = () => (
    <>
        {[0,1,2,3,4].map((index: number) => (
            <li key={cn("skeleton", index)}>
                <Skeleton className={`startup-card_skeleton`}/>
            </li>
        ))}
    </>
)