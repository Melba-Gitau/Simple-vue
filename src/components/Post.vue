<template>
    <div>
       <form @submit="postData" method= "post">
        <input type=" text" name = "author" v-model ="posts.author"><br> <br>
        <input type=" text" name = "title" v-model ="posts.title"><br> <br>
        <button type = "submit">Post</button>
       </form>    
       </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.useAttrs(VueAxios, axios)

export default{
    name:'Post',
    data(){
        return{
            posts:{
                title:null,
                author:null
            }
        }
    },
    methods:{
        postData(e)
        {
            this.axios.posts
            e.preventDefault();
           
        }
    }
}
</script>