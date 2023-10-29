<script setup>

</script>

<template>
  <h1>homeView</h1>
  <div class="wrapper">
    <div class="income">
      <h1>收入</h1>
    </div>
    <div class="outcome">
      <h1>支出</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper{
  display: flex;
}
.income,
.outcome {
  width: 500px;
  height: 500px;
  border: 1px solid black;

}
</style>