import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2021-03-25",
  useCdn: true,
});

interface GetPostsOptions {
  page: number;
  pageSize: number;
}

export async function getPosts(options: GetPostsOptions) {
  const { page, pageSize } = options;
  const skip = (page - 1) * pageSize;
  const [posts, count] = await Promise.all([
    sanity.fetch(
      `*[_type == "post"] | order(_createdAt desc) { 
        title,
        slug,
        body,
        readTime,
        _createdAt,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }[${skip}...${skip + pageSize}]`
    ),
    sanity.fetch(`count(*[_type == "post"])`),
  ]);
  const totalPages = Math.ceil(count / pageSize);
  const castedPosts = posts as Post[];
  return { posts: castedPosts, totalPages };
}

export async function getPost(slug: string) {
  const post = await sanity.fetch(
    `*[_type == "post" && slug.current == $slug]{
      title,
      slug,
      body,
      readTime,
      _createdAt,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`,
    { slug }
  );
  return post[0] as Post;
}
