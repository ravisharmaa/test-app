export const updatePostsInState = (state, response) => {
    return state.categories = response.data.category
};

export const showSinglePost = (state, response) => {
  return state.posts = response.data.post
};