import axios from 'axios'

export const getPosts =({commit}) => {
    return axios.get('/posts').then((response) => {
        commit('updatePostsInState', response)
    }).catch((error) => {
        console.log(error)
    })
}

export const submitPostForm = ({commit}, payload) => {
   return axios.post('/create/posts',payload).then((response) => {
        return response
   }).catch((error) => {
       console.log(error)
   })

}