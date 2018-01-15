import axios from 'axios'

export const getPosts =({commit}) => {
    return axios.get('/posts').then((response) => {
        commit('updatePostsInState', response)
    }).catch((error) => {
        console.log(error)
    })
}