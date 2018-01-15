<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Add a Category</div>

                    <div class="panel-body">
                        <form action="" @submi.prevent="submitForm">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" id="title" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="body">Body</label>
                            <input type="text" id="body" class="form-control">
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:'Post',
        mounted() {
            console.log('Component mounted.')
        },



    }
</script>
