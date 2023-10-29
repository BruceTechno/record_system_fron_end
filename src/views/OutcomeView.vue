<script>
export default {

}
</script>

<template>
    <h1>Outcome homeView</h1>
    <div class="wrapper">
    <div class="date">
        <label for="date">消費日期</label>
        <input type="date" name="date" id="date">
    </div>

    <div class="category">
        <label for="category">分類</label>
        <select class="category-select" >
            <option value="3C產品">3C產品</option>
        </select>
        <button type="button">新增分類</button>
    </div>

    <div class="cost">
        <label for="cost">花費金額</label>
        <input type="number" name="cost" id="cost">
    </div>

    <div class="thing">
        <label for="thing">花費事項</label>
        <input type="text" name="thing" id="thing">

    </div><div class="isRequire">
        <label for="isRequire">必要花費</label>

        <input type="radio" name="isRequire" id="yes" value="是">
        <label for="yes">是</label>

        <input type="radio" name="isRequire" id="no" value="否">
        <label for="no">否</label>
    </div>

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