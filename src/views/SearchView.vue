<script >
import SearchCard from "../components/SearchCard.vue"    

export default{
    components:{
        SearchCard,
    },
    data() {
        return {
            //Req
            dateS:null,
            dateE:null,
            ctgId:null,
            cost:null,
            ynRequired:null,
            thing:null ,
        }
    },
    methods: {
        search(){
            let body = {
                dateS:this.dateS,
                dateE:this.dateE,
                //ctgId:this.ctgId,//
               // cost:this.cost,//花費
              //  ynRequired:this.thing,//做了什麼事
                //thing:this.ynRequire,//是否必要花費
            }
            console.log(body);
            fetch("http://localhost:8080/search_accounting_by_conditions", {
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
                  
                })
        }
    },
}

</script>

<template>
    <h1> Search Page Here</h1>
    <div class="date">
        <label for="">日期居間</label>
        <input type="date" v-model="dateS">
        <label >~</label>
        <input type="date" v-model="dateE">
    </div>
    <div class="ctg">
        <label >分類</label>
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
    </div>
    <br><br><br>
    <div>
        <label>金額</label>
        <input type="number">~
        <input type="number">
    </div>
    <div class="ynRequired">
        <label for="">必要花費</label>
        <input type="radio" id="yRequired" name="ynRequired">
        <label for ="yRequired">是</label>
        <input type="radio" id="nRequired" name="ynRequired">
        <label for ="nRequired">否</label>
        <button type="button" @click="search">搜尋</button>
    </div>
    <SearchCard />
    <h2>$[日期起]~$[日期迄]總共花費 :$[總消費金額之加總] ,不必要花費 :共$[不必要花費之加總]筆</h2>
   
</template>

<style lang="" scoped>
    
</style>