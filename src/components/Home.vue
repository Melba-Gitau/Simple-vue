<template>
    <h1 v-if="show">Hello from home</h1>
    <!-- <h1 v-else>{{ data }}</h1>
    <button v-on:click= "hello">Call hello</button> -->
    <table border = "2px">
        <tr>
            <td>id</td><td>name</td><td>email</td>
        </tr>
        <tr v-for = "user in users" :key ="user.id">
            <td>{{user.id}}</td><td>{{user.name}}</td><td>{{user.email}}</td>
        </tr>
    </table>
</template>

<script>
export default{
    name:'Home',
    props:{
        data:String
    },
    data(){
            return {
            users:  [
                {id:1,name:'peter',email:'peter@gmail.com'},
                {id:2,name:'sam',email:'sam@gmail.com'},
                {id:3,name:'ndesh',email:'ndesh@gmail.com'},
                {id:4,name:'eunice',email:'eunice@gmail.com'}
              ]
            }
        },
    methods:{
        hello(){
            alert("hello world");
        },
        
    }
}
</script>