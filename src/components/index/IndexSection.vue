<template>
  <section>
    <index-section-top></index-section-top>
    <index-section-bom></index-section-bom>
  </section>
</template>

<script>
    import IndexSectionTop from "./IndexSectionTop";
    import IndexSectionBom from "./IndexSectionBom";
    export default {
        name: "IndexSection",
      components: {IndexSectionBom, IndexSectionTop}
    }
</script>

<style lang="scss" scoped>
section{
    flex: 1;
    background: #eeeff4;
    padding:0 32px;
    box-sizing: border-box;
  overflow-y: auto;
}
</style>
