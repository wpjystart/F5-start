<template>
  <div class="box">
    <div class="box-left">
      <img src="static/shuai/img/icon-menu.jpg" alt=""/>
      <img src="static/shuai/img/icon-fullscreen.jpg" alt=""/>
      <span>Mega</span>
      <img src="static/shuai/img/icon-search.jpg" alt=""/>
    </div>
    <div class="box-right">
      <div class="dropdown">
        <div class="btn" data-toggle="dropdown">
          Hello, <b>John Doe</b>
          <img src="static/shuai/img/icon-head.jpg" alt=""/>
        </div>
        <div class="dropdown-menu shadow">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <img src="static/shuai/img/icon-flag.jpg" alt=""/>
      <img src="static/shuai/img/icon-notice.jpg" alt=""/>
      <img src="static/shuai/img/icon-message.jpg" alt=""/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss" scoped>
  .box{
    height: 100%;
    background: #1E9FF2;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    .box-left{
      width: 250px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .box-right{
      width: 400px;
      /*height: 100%;*/
      display: flex;
      justify-content: space-around;
      .dropdown{
        height: 100%;
        .btn{
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: transparent;
          color: white;
          font-size: 16px;
          img{
            margin-left: 20px;
          }
        }
      }
      img{
        display: block;
      }
    }
  }
</style>
