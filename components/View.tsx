import {Ping} from "@/components/Ping";
import {client} from "@/sanity/lib/client";
import {STARTUP_VIEWS_QUERY} from "@/sanity/lib/queries";

export const View = async ({id}: {id: string}) => {
    const { views } = await client
        .withConfig({ useCdn: false }) // useCdn: false отключает использование Content Delivery Network (CDN). Это гарантирует, что данные будут запрашиваться напрямую с сервера Sanity и всегда будут актуальными, а не кэшированными.
        .fetch(STARTUP_VIEWS_QUERY, { id })

    // TODO Update the number of views

    return (
        <div className="view-container">
            <div className={`absolute -top-2 -right-2`}>
                <Ping />
            </div>

            <p className={`view-text`}>
                <span className={`font-black`}>Views: {views}</span>
            </p>
        </div>
    )
}