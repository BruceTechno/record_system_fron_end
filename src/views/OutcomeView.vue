<script >
import Modal from "../components/Modal.vue"
export default{
    components:{
        Modal,
    },
    data() {
        return {
            //Req
            userId:null,
            date: new Date().toISOString().substring(0, 10),
            ctgId:null,
            cost:null,
            thing:null,
            ynRequire:"Y",
            incomeOrOutcome:null,
            // page paramater
            isShow:false,
            //Response
            ctgList:[],
        }
    },
    methods:{
        modalSwitch(){
            this.isShow = !this.isShow;
        },
        addAccounting(){
            let body = {
                userId:"bruce",
                date:this.date,//日期
                categoryId:this.ctgId,//
                cost:this.cost,//花費
                thing:this.thing,//做了什麼事
                ynRequire:this.ynRequire,//是否必要花費
                incomeOrOutcome:0,//是收入還是支出
            }
            console.log(body);
            fetch("http://localhost:8080/add_accounting", {
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
                    this.$router.go(0)
                })
        },
        getCtg(){
            let body = {
                userId:"bruce",
                ctgFor:"accounting",
            }
            console.log(body);
            fetch("http://localhost:8080/ctg_by_user_and_ctgFor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => {                  
                    if(data.message === 'Successful!!'){
                        console.log(data.categoryList);
                        this.ctgList = data.categoryList
                        this.ctgId = this.ctgList[0].id;
                    }
                   
                   
                })
        }
    },
    mounted() {
        this.getCtg();
    },
}


</script>

<template>
    <h1>Outcome homeView</h1>
    <div class="wrapper">
    <div class="date" >
        <label for="date">消費日期</label>
        <input type="date" name="date" id="date" v-model="date">
    </div>

    <div class="category">
        <label for="category">分類</label>
        <select class="category-select" v-model="ctgId">
            <option v-for="(ctg,index) in ctgList " :key="index" :value=ctg.id>{{ ctg.name }}</option>
        </select>
        <button type="button" @click="modalSwitch">新增分類</button>
    </div>
  <!-- Modal -->
  <Modal v-if="isShow" @clickToClose="modalSwitch"></Modal>
    <div class="cost">
        <label for="cost">花費金額</label>
        <input type="number" name="cost" id="cost" v-model="cost">
    </div>

    <div class="thing">
        <label for="thing">花費事項</label>
        <input type="text" name="thing" id="thing" v-model="thing">

    </div><div class="ynRequire">
        <label for="ynRequire">必要花費</label>

        <input type="radio" name="ynRequire" id="ynRequireY" value="Y" v-model="ynRequire">
        <label for="ynRequireY">是</label>

        <input type="radio" name="ynRequire" id="ynRequireN" value="N" v-model="ynRequire">
        <label for="ynRequireN">否</label>
    </div>
<button type="button" @click="addAccounting">新增</button>
</div>
  
</template>

<style lang="scss" scoped>
    .wrapper{
        background-color: #E2C2B3;
    border-radius: 20px;
    margin: 50px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    }
    label {
            font-weight: bold;
        }

        input {
            font-size: 20px;
            border-radius: 10px;
            border: none;
            background-color: #F7F3F5;
            margin: 10px 10px;
            text-align: center;
        }
</style>