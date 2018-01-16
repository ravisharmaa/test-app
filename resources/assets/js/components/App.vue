<template>
   <div>
     <!--  <div class="container">
           <router-link to="create/posts" class="btn btn-primary pull-right">Add Post</router-link>
           <h2>Posts Data</h2>
           <div class="table-responsive" v-if="categories.length">
               <table class="table">
                   <thead>
                   <tr>
                       <th>Category Name</th>
                       <th>Post</th>
                       <th>Actions</th>
                   </tr>
                   </thead>
                   <tbody>
                   <tr v-for="category in categories" :key="category.id">
                       <td>{{category.name}}</td>
                       <td v-for="post in category.posts" >
                           {{post.body}}
                       </td>
                       <td>
                            <button @click="deletePost(category.id)" class="btn btn-danger btn-sm"> Delete </button>
                            <button @click="editPost(category.id)" class="btn btn-primary btn-sm">Edit Post</button>
                       </td>
                   </tr>
                   </tbody>
               </table>
           </div>
           <div v-else class="alert alert-success">
               No Posts Added
           </div>
       </div>-->
       <div class="container">
           <div class="row">
               <div class="col-md-8 col-md-offset-2">
                   <div class="panel panel-default" v-for="category in categories" >
                       <div class="panel-heading">{{category.name}}</div>
                       <div class="panel-body" v-for="post in category.posts">
                            {{post.title}}
                       </div>
                   </div>
               </div>
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
            categories:'categories'
        }),



    }
</script>
