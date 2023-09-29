<template>
    <div>
        <input type = "text" v-model ="loginForm.username" placeholder = "username" name = "username"/><br>
        <input type = "password" v-model ="loginForm.password" placeholder = "password" name = "password"/><br>
        <button v-on:click = "getLogin">Login</button>
    </div>
</template>
<script>
export default{
    name: 'Login',
    data(){
        return {
            loginForm:{
            username:null,
            password:null,
        }
    }
},
    methods:{
        getLogin()
        {
            console.log("login",this.loginForm);
        }
    }
}
</script>