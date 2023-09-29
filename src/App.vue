<script setup>
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Active from "./components/Active.vue";
import Post from "./components/Post.vue";

</script>

<template>
    <div id="app">
      <!-- <Home data = "Anil is here"/>
       <Login/> -->
       <!-- <Active/> -->
       <!-- <Post/> -->
       <router-view></router-view>
    </div>
</template>
<style>
#app{
    border:2px;
    
    width:500px;
    margin-top:2%;
}
</style>

