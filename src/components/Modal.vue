<script >
export default {

    data() {
        return {
            categoryList: ["accounting", "健身表", "單字表"],
            option:"",
            ctgName:null,
        }
    },
    methods: {
        close(){
            this.$emit("clickToClose")
        },
        addCtg(){
            console.log(this.option);
            console.log(this.ctgName);
            let body = {
                userId:"bruce",
                ctgFor: this.option,
                name: this.ctgName,
            }
            fetch("http://localhost:8080/add_ctg", {
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
    }
}

</script>

<template>
    <div class="container">
       
        <div class="modal">
            <div class="title">
            <h2>新增分類</h2>
        </div>
            <div class="select-group">
                <label>選擇要將分類新增到哪張表</label>
                <div class="select">
                <select name="categoryList" v-model="option" >
                    <option v-for="(item, index) in categoryList" :key="index" :value=item >
                        {{ item }}
                    </option>
                </select>
                <label for="ctgName">分類名稱</label>
                <input type="text" id="ctgName" v-model="ctgName">
            </div></div>
           <div class="btn-group">
                <button type="button" @click="addCtg">新增</button>
                <button type="button" @click="close">關閉</button>
            </div>
        </div>
        <div class="bg"></div>
    </div>
</template>

<style lang="scss" scoped>

.container{
    border: 3px solid black;
  
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal{
        width: 50vw;
        height: 50vh;
        background-color: white;
        z-index: 1;
        border-radius: 0.5rem;
     
        .title{
            display: flex;
            justify-content: center; 
            align-items: center;
        }
       
        .btn-group{
           justify-content:flex-end;
        }
    }
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        background-color: black;
        opacity: 0.8;
        z-index: -1;
    }
}
</style>