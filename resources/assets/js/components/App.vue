<template>
   <div>
       <router-link to="create/posts" class="btn btn-primary">Add Post</router-link>
       <ul>
            <li v-for="post in posts">{{post.title}}, {{post.body}}</li>
       </ul>

   </div>


</template>

<script>
    import {mapGetters, mapActions } from 'vuex'
    export default {
        mounted() {
            this.getPosts()
        },

        methods:{
            ...mapActions({
                getPosts:'getPosts'
            })
        },
        computed: mapGetters({
            posts:'posts'
        }),



    }
</script>
