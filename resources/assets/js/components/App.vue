<template>
   <div>

       <div class="container">
           <router-link to="create/posts" class="btn btn-primary pull-right">Add Post</router-link>
           <h2>Posts Data</h2>
           <div class="table-responsive" v-if="posts.length">
               <table class="table">
                   <thead>
                   <tr>
                       <th>Title</th>
                       <th>Body</th>
                       <th>Category</th>
                       <th>Actions</th>
                   </tr>
                   </thead>
                   <tbody>
                   <tr v-for="post in posts" :key="post.id">
                       <td>{{post.title}}</td>
                       <td>{{post.body}}</td>
                       <td>category</td>
                       <td>
                            <button @click="deletePost(post.id)" class="btn btn-danger btn-sm"> Delete </button>
                            <button @click="editPost(post.id)" class="btn btn-primary btn-sm">Edit Post</button>
                       </td>
                   </tr>
                   </tbody>
               </table>
           </div>
           <div v-else class="alert alert-success">
               No Posts Added
           </div>
       </div>
   </div>
</template>

<script>
    import {mapGetters, mapActions } from 'vuex'
    export default {
        mounted() {
            this.getPosts()
        },

        methods:{
            deletePost(postId){
                this.posts.filter((post) => {
                    return post.id !== postId
                });
                this.sendDeleteRequest(postId)
            },

            editPost(postId){
               this.$router.push({path:`/edit/posts/${postId}`})
            },

            ...mapActions({
                getPosts:'getPosts',
                sendDeleteRequest:'sendDeleteRequest'
            })
        },
        computed: mapGetters({
            posts:'posts'
        }),



    }
</script>
