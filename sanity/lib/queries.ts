import {defineQuery} from "groq";

export const STARTUPS_QUERY =
    defineQuery(`
    *[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc){
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

export const STARTUP_QUERY_BY_ID = defineQuery(`*[_type == "startup" && _id == $id][0]{
  _id,
    title,
    slug,
    _created_at,
    author -> {
      _id, name, image, bio, username
    },
    views,
    description,
    category,
    image,
    pitch
}`)