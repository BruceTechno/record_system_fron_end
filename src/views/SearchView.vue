<script >
import SearchCard from "../components/SearchCard.vue"    

export default{
    components:{
        SearchCard,
    },
    data() {
        return {

        }
    },
}

</script>

<template>
    <h1> Search Page Here</h1>
    <label for="">日期居間</label>
    <input type="date">
    <label >~</label>
    <input type="date">
    <br><br><br>
    <SearchCard />

   
</template>

<style lang="" scoped>
    
</style>