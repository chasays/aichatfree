import { slugifyAll } from "./slugify";
import type { PostCollectionEntry } from "../types.ts";

const getPostsByTag = (posts: PostCollectionEntry[], tag: string) =>
  posts.filter(post => slugifyAll(post.data.tags).includes(tag));

export default getPostsByTag;
