const baseUrl = "https://jsonplaceholder.typicode.com/";

export const url = {
  posts: () => `${baseUrl}posts/`,
  selectedComents: id => `${baseUrl}comments?postId=${id}`
};
