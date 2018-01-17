import axios from 'axios'

export const getPosts =({commit}) => {
    return axios.get('/posts').then((response) => {
        commit('updatePostsInState', response)
    }).catch((error) => {
        console.log(error)
    })
};

export const submitPostForm = ({commit}, payload) => {
   return axios.post('/create/posts',payload).then((response) => {
        return response
   }).catch((error) => {
       console.log(error)
   })

};

export const sendDeleteRequest = ({commit, dispatch}, payload) => {
    return axios.delete(`/posts/delete/${payload}`).then((response) =>{
        dispatch('getPosts')
    }).catch((error) => {
      console.log(error)
  })
};

export const getSinglePost = ({commit}, payload) => {
    return axios.get(`/posts/edit/${payload}`).then((response) => {
        commit('showSinglePost', response)

    }).catch((error) => {
        console.log(error)
    })
};

export const updatePostById = ({dispatch}, payload) => {
    return axios.post('/posts/update', payload).then((response) => {
       dispatch('getPosts')
    }).catch((error) => {
        console.log(error)
    })
};

export const getCategories = ({commit}) => {
  return axios.get('/categories').then((response) => {
      commit('updateCategoryOnly', response)
  }).catch((error) => {
      console.log(error)
  })
};

