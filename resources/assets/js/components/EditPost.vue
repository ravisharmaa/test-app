<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Add a Category</div>
                    <div class="panel-body">
                        <form action="#" @submit.prevent="updatePost">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text"  id="title" v-model="formData.title" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="body">Body</label>
                            <input type="text" id="body" v-model="formData.body" class="form-control">
                        </div>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name:'EditForm',
        data() {
            return {

            }
        },
        methods:{
            getPostById(postId){
                this.getSinglePost(postId)
            },

            updatePost(){
               this.updatePostById(this.formData).then((response) => {
                   this.$router.replace('/')
               })
            },
            ...mapActions({
                getSinglePost:'getSinglePost',
                updatePostById:'updatePostById'
            })
        },

        mounted(){
            let postId = this.$route.params.postId
            this.getPostById(postId)
        },

        computed: mapGetters({
            formData:'posts'
        })

    }
</script>
