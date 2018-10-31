<template>
  <div class="page">
    <Aside class="aside"></Aside>
    <div class="pageRight">
      <Header class="header"></Header>
      <section>内容</section>
    </div>
  </div>
</template>

<script>
  import Header from "../components/Header";
  import Aside from "../components/Aside";
  export default {
    name: "Index",
    components: {Aside, Header}
  }
</script>

<style lang="scss" scoped>
  .page{
    height: 100%;
    display: flex;
    .aside{
      width: 260px;
      height: 100%;
    }
    .pageRight{
      flex: 1;
      display: flex;
      flex-direction: column;
      .header{
        height: 70px;
        background: #1E9FF2;
      }
      section{
        flex: 1;
        background: pink;
      }
    }
  }
</style>
