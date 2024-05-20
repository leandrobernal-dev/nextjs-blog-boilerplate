import { SITE } from "@/config/config";
import axios from "axios";

export const headers = {
  headers: {
    Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`,
  },
};

export async function getPosts(page = 1) {
  let afterCursor = null;

  for (let i = 1; i < page; i++) {
    const query = {
      query: `
        query GetPosts($first: Int!, $after: String) {
          posts(first: $first, after: $after) {
            pageInfo {
              endCursor
              hasNextPage
            }
            nodes {
              id
              slug
              title
              date
              excerpt
              tags {
                nodes {
                  id
                  name
                }
              }
            }
          }
        }
      `,
      variables: {
        first: SITE.postPerPage,
        after: afterCursor,
      },
    };

    const result = await axios
      .post(process.env.GRAPHQL_URI, query, headers)
      .then(({ data }) => {
        return data.data.posts;
      });

    if (!result.pageInfo.hasNextPage) {
      break;
    }

    afterCursor = result.pageInfo.endCursor;
  }

  const query = {
    query: `
      query GetPosts($first: Int!, $after: String) {
        posts(first: $first, after: $after) {
          pageInfo {
            endCursor
            hasNextPage
          }
          nodes {
            id
            slug
            title
            date
            excerpt
            tags {
              nodes {
                id
                name
              }
            }
          }
        }
      }
    `,
    variables: {
      first: SITE.postPerPage,
      after: afterCursor,
    },
  };

  const finalResult = await axios
    .post(process.env.GRAPHQL_URI, query, headers)
    .then(({ data }) => {
      return data.data.posts;
    });

  return finalResult.nodes;
}

export default async function getPost(query) {
  const posts = await axios
    .post(process.env.GRAPHQL_URI, query, headers)
    .then(({ data }) => {
      return data.data;
    });
  return posts;
}

export async function getTotalPostsCount() {
  const query = {
    query: `
      query GetPostsInfo {
        posts {
          nodes {
            id
          }
        }
      }
    `,
  };

  const result = await axios
    .post(process.env.GRAPHQL_URI, query, headers)
    .then(({ data }) => data.data.posts);

  return result.nodes.length;
}
