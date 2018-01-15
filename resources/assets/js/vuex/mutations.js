export const updatePostsInState = (state, response) => {
    return state.posts = response.data.posts
}