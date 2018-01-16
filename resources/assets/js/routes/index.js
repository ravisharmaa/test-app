import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/App'
import Post from '../components/Post'
import EditForm from '../components/EditPost'
Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'',
            component:App,
        },
        {
            path:'/create/posts',
            component:Post
        },
        {
            path:'/edit/posts/:postId',
            component:EditForm
        }

    ]
})