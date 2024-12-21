import {defineQuery} from "groq";

export const STARTUPS_QUERY =
    defineQuery(`
    *[_type == "startup" && defined(slug.current)]{
  _id,
    title,
    slug,
    _created_at,
    author -> {
      _id, name, image, bio
    },
    views,
    description,
    category,
    image
}`)