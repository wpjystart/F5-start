<template>
  <div class="page">
    <Aside class="aside"></Aside>
    <div class="pageRight">
      <Header class="header"></Header>
      <IndexSection></IndexSection>
    </div>
  </div>
</template>

<script>
  import Header from "../components/index/Header";
  import Aside from "../components/index/Aside";
  import IndexSection from "../components/index/IndexSection";
  export default {
    name: "index",
    components: {IndexSection, Header, Aside}

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
      .section{
        flex: 1;
      }
    }
  }
</style>
