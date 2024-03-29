<script>
import { RouterLink } from 'vue-router';

export default {
    components: { RouterLink }
}
</script>

<template>
    <header>
    <div class="headerWrapper">
        <div class="home">
            <RouterLink class="link" to="/">Home Page</RouterLink>
        </div>
        <div class="outCome">
            <RouterLink class="link" to="/OutcomeView">Outcome Page</RouterLink>
        </div>
        <div class="search">
            <RouterLink class="link" to="/SearchView">Search Page</RouterLink>
        </div>
        <div class="login">
            <RouterLink class="link" to="/LoginView">Login</RouterLink>
        </div>
    </div>
</header>
</template>

<style lang="scss">
    header{
        width: 100%;
        background-color: pink;
        padding: 1rem 4rem;
        font-size: 2rem;
        justify-content: center;
        align-items: center;
    }
    .headerWrapper{
      display: flex;
      justify-content: space-around;
      align-items: end;
    }
    .link{
        text-decoration: none;
        color: rgb(88, 41, 41);
        cursor: pointer;
        transition: 0.3s;
        margin: 0 1rem;
        &:hover{
            color: aquamarine;
        }
    }
</style>