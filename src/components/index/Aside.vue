<template>
  <div class="box">
    <div class="box-logo">
      <img src="static/shuai/img/logo.png" alt=""/>
      <h3>后台管理系统</h3>
    </div>
    <div id="accordion">
      <div v-for="(item,index) in items" class="item">
        <div class="item-header" :class="{itemHeaderActived:num==index}" data-toggle="collapse" :data-target="'#'+item.name" @click="num=index,item.open=!item.open">
          <i class="zi" :class="item.icon"></i>
          <span class="name">{{item.name}}</span>
          <i class="zi zi_pathRight" :class="{actived:item.open,noItemSub:!item.itemSub.length}"></i>
          <span v-show="num==index" class="sign"></span>
        </div>
        <div class="item-body collapse" :id="item.name">
          <span v-for="(itemSub,idx) in item.itemSub" :class="{itemSubActived:item.num==idx&num==index}" class="itemSub" @click="num=index,item.num=idx">
            {{itemSub}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Aside",
    data(){
      return{
        num:0,
        items:[
          {
            "id":"00000",
            "icon":"zi_crown",
            "name":"主页",
            "open":false,
            "itemSub":[]
          },
          {
            "id":"00001",
            "icon":"zi_star",
            "name":"数据1",
            "open":false,
            "num":-1,
            "itemSub":[
              "子页1",
              "子页2",
              "子页3",
              "子页4",
              "子页5"
            ]
          },
          {
            "id":"00002",
            "icon":"zi_star",
            "name":"数据2",
            "open":false,
            "num":-1,
            "itemSub":[
              "子页1",
              "子页2",
              "子页3",
              "子页4",
              "子页5"
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  //激活样式
  .actived{
    transform: rotate(90deg);
  }
  //无子页样式
  .noItemSub{
    opacity: 0;
  }

  i{
    transition: .5s;
  }
  .box{
    height: 100%;
    position: relative;
    .box-logo{
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      box-shadow: 0px 0px 30px #aaa;
      position: absolute;
      z-index: 1;
      background: white;
      img{
        width: 40px;
        margin: 0 20px;
      }
      h3{
        font-size: 18px;
      }
    }
    #accordion{
      margin-top: 70px;
      .item{
        color: #868892;
        cursor: pointer;
        .item-header{
          height: 50px;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: .3s;
          position: relative;
          .name{
            width: 70%;
          }
          .sign{
            display: block;
            width: 5px;
            height: 100%;
            background: #1E9FF2;
            position: absolute;
            right: 0;
          }
        }
        //划过
        .item-header:hover{
          background: #F5F5F5;
          transform: scale(1.05);
        }
        //激活
        .itemHeaderActived{
          background: #F5F5F5;
        }
        .item-body{
          .itemSub{
            display: block;
            height: 40px;
            padding-left: 50px;
            transition: .2s;
          }
          //划过
          .itemSub:hover{
            background: #F0F0F0;
            transform: scale(1.1);
          }
          //激活
          .itemSubActived{
            background: #F0F0F0;
          }
        }
      }
    }
  }
</style>
