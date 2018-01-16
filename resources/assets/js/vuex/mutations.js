export const updatePostsInState = (state, response) => {
    return state.posts = response.data.posts
};

export const showSinglePost = (state, response) => {
  return state.posts = response.data.post
};