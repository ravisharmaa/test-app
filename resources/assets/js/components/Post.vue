<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Add a Category</div>
                    <div class="panel-body">
                        <form action="#" @submit.prevent="postForm">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" v-model="formData.title" id="title" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="title">Select Category</label>
                            <select v-model="formData.selectCategories" class="form-control">
                                <option value="">Please Select</option>
                                <option :value="category.id" v-for="category in categories">{{category.name}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="body">Body</label>
                            <input type="text" v-model="formData.body" id="body" class="form-control">
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
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name:'Post',
        data() {
            return {
                formData:{
                    title:'',
                    body:'',
                    selectCategories:'1'
                }
            }
        },
        methods:{
            postForm(){

                this.submitPostForm(this.formData).then((response) => {
                    this.$router.replace('/');
                })
            },

            getCategoriesOnly(){
                this.getCategories()
            },
            ...mapActions({
                submitPostForm:'submitPostForm',
                getCategories:'getCategories'
            })
        },

        mounted(){
            this.getCategoriesOnly();
        },

        computed:mapGetters({
            categories:'categories'
        })



    }
</script>
