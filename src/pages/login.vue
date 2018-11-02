<template>
  <div>
    <div class="bgurl">
      <img src="../../static/peng/login.png" alt="">
    </div>
    <div class="login">
      <h2>电视节目后台管理系统</h2>
      <input type="text" placeholder="请输入管理员姓名">
      <img src="../../static/peng/herd.png" alt="">
      <input type="password" placeholder="请输入登陆密码"><br/>
      <img src="../../static/peng/suo.png" alt="">
      <input type="checkbox" class="ipt" >记住用户名
      <p>登陆</p>
    </div>
  </div>

</template>

<script>
    export default {
        name: "login"
    }
</script>

<style lang="scss" scoped>
  .bgurl{
    width: 100%;
    height: 100%;
    position: fixed;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .login{
    width: 274px;
    height: 367px;
    position: absolute;
    right:397px;
    top:242px;
    h2{
      text-indent: 20px;
      font-size: 24px;
      color: #000;
      margin-bottom: 50px;
    }
    input{
      width: 274px;
      height: 58px;
      font-size: 18px;
      border: 0px;
      outline:none;
      cursor: pointer;
      border-bottom: 1px solid #eee;
      text-indent: 57px;
      position: relative;
      margin-bottom: 10px;
      input::-webkit-input-placeholder {
                 color: #bfbfbf;
             /* placeholder字体大小  */
                 font-size: 14px;
               /* placeholder位置  */
                  text-align: right;
      }
    }
    .ipt{
      vertical-align: middle;
      width: 27px;
      height: 16px;
      margin: 0;
    }
    p{
      display: inline-block;
      width: 231px;
      height: 47px;
      background-color: #4f93fe;
      color: white;
      border-radius: 35px;
      text-align: center;
      line-height: 40px;
      margin-top: 30px;
      margin-left: 20px;
      cursor:pointer
    }
    img:nth-child(3){
      position: absolute;
      top:91px;
      left: 11px;
    }
    img:nth-child(6){
      position: absolute;
      top:160px;
      left: 11px;
    }
  }
</style>
