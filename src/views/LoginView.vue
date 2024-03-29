<script>
export default {
    data() {
        return {
            account:null,
            pwd:null
        }
    },
    methods: {
        login(){
            let body = {
                account:this.account,
                pwd:this.pwd
            }
            console.log(body);
            fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    alert(data.message)
                })
        }
    },
}
</script>

<template >
    <div class="title">
        <h1> login page</h1>
    </div>
    <div class="account">
        <label>account :</label>
        <input type="text" id="account" v-model="account">
    </div>
    <div class="pwd">
        <label>password :</label>
        <input type="password" v-model="pwd">
    </div>
    <div class="btn login"> 
       <button type="button" @click="login">Login</button>
    </div>
</template>

<style lang="">
    
</style>