<script >
import { RouterLink } from 'vue-router';

</script>

<template>
  <h1>homeView</h1>
  <div class="wrapper">
  <RouterLink class="income"  to="/InComeView">
      <h1>收入</h1>
    </RouterLink>
    <RouterLink class="outcome" to="/OutcomeView">
      <h1>支出</h1>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}

.income,
.outcome {
  width: 500px;
  height: 500px;
  border: 1px solid black;

}
</style>