import axios from "axios";

export const headers = {
  headers: {
    Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`,
  },
};

export default async function getPosts(query) {
  const posts = await axios
    .post(process.env.GRAPHQL_URI, query, headers)
    .then(({ data }) => {
      return data.data;
    });
  return posts;
}
