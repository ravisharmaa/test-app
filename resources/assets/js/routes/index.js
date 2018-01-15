import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/App'
import Post from '../components/Post'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'',
            component:App,
        },
        {
            path:'/create/posts',
            component:Post
        }

    ]
})