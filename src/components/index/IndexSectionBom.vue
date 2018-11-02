<template>
  <div>
     <div class="sec-bom" >
      <div class="sec-bom-header">
               <p>在这里添加你们的大数据名称</p>
          <div class="sec-bom-header-right">
               <img src="../../../static/peng/peng03.png" class="imgjh" alt="" @click="flag" v-if="changeFlag">
               <img src="../../../static/peng/peng04.png" class="imgjh1" alt="" @click="flag" v-if="!changeFlag">
                <i class="zi zi_undo"></i>
          </div>
      </div>
      <div v-if="bott" class="sec-bom-txt">
        <h6>在这里添加你们有趣的笑话！！！！！！！</h6>
        <div class="sec-bom-sel">
             <div class="sec-bom-sel-left">
               <h5>show &nbsp</h5>
               <select name="" id="set">
                 <option value="">10</option>
                 <option value="">20</option>
                 <option value="">50</option>
                 <option value="">100</option>
               </select>
               <h5>&nbsp entries</h5>
             </div>
          <!--添加和查询-->
             <div class="sec-bom-sel-right">
               <button type="button" class="btn btn-primary" style="font-size: 13px;border-radius: 5px;padding: 6px 12px;" data-toggle="modal" data-target="#createForm">
                 添加
               </button>
               <!-- Modal -->
               <div class="modal fade" id="createForm" tabindex="-1" role="dialog" aria-labelledby="createFormTitle" aria-hidden="true">
                 <div class="modal-dialog modal-dialog-centered" role="document">
                   <div class="modal-content">
                     <div class="modal-header">
                       <h5 class="modal-title" id="createFormTitle">添加</h5>
                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                       </button>
                     </div>
                     <div class="modal-body">
                       <div class="input-group mb-3">
                         <div class="input-group-prepend">
                           <span class="input-group-text" id="createForm-input0">ID</span>
                         </div>
                         <input v-model="itemCreate.id" type="text" class="form-control" placeholder="请输入ID" aria-label="Username" aria-describedby="createForm-input0">
                       </div>
                       <div class="input-group mb-3">
                         <div class="input-group-prepend">
                           <span class="input-group-text" id="createForm-input1">名称</span>
                         </div>
                         <input v-model="itemCreate.mingcheng" type="text" class="form-control" placeholder="请输入名称" aria-label="Username" aria-describedby="createForm-input1">
                       </div>
                       <div class="input-group mb-3">
                         <div class="input-group-prepend">
                           <span class="input-group-text" id="createForm-input2">描述</span>
                         </div>
                         <input v-model="itemCreate.laiyuan" type="text" class="form-control" placeholder="请输入描述" aria-label="Username" aria-describedby="createForm-input2">
                       </div>
                       <div class="input-group mb-3">
                         <div class="input-group-prepend">
                           <span class="input-group-text" id="createForm-input3">现价</span>
                         </div>
                         <input v-model="itemCreate.paiming" type="text" class="form-control" placeholder="请输入现价" aria-label="Username" aria-describedby="createForm-input3">
                       </div>
                       <div class="input-group mb-3">
                         <div class="input-group-prepend">
                           <span class="input-group-text" id="createForm-input4">原价</span>
                         </div>
                         <input v-model="itemCreate.smhot" type="text" class="form-control" placeholder="请输入原价" aria-label="Username" aria-describedby="createForm-input4">
                       </div>
                       <div class="input-group mb-3">
                         <div class="input-group-prepend">
                           <span class="input-group-text" id="createForm-input5">销量</span>
                         </div>
                         <input v-model="itemCreate.zhishu" type="text" class="form-control" placeholder="请输入销量" aria-label="Username" aria-describedby="createForm-input5">
                       </div>
                     </div>
                     <div class="modal-footer">
                       <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                       <button type="button" class="btn btn-primary" data-dismiss="modal" @click="createData">确定</button>
                     </div>
                   </div>
                 </div>
               </div>
               <button type="button" class="btn btn-primary" @click="readData" style="font-size:13px;border-radius:5px;padding: 6px 12px;">查找</button>
               <input v-model="itemRead.mingcheng" type="text" placeholder="请按名称查找"/>
             </div>
        </div>
        <!--编辑和删除-->
        <div class="sec-bom-tobles">
          <div class="col-sm-12 ">
            <table class="table table-bordered zero-configuration dataTable table-hover" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info"><thead></thead>
              <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Office</th>
                <th scope="col">Age</th>
                <th scope="col">Start date</th>
                <th scope="col" style="text-align: center">操作</th>
                </tr>
              </thead>
              <tbody>
            <tr  v-for="(item,inx) in items" :key="item.id">
              <td class="">{{item.mingcheng}}</td>
              <td>{{item.laiyuan}}</td>
              <td class="sorting_1">{{item.paiming}}</td>
              <td class="">{{item.smhot}}</td>
              <td>{{item.zhishu}}</td>
              <td style="padding: 10px 0;width: 145px">
                <!--编辑判断-->
                <button type="button" class="btn btn-primary" style="padding: .375rem .59rem;font-size: 0.8rem;margin: 0 20px 0 10px" data-toggle="modal" data-target="#updateForm" @click="updateFormShow(item)">编辑</button>
                <!-- Modal -->
                <div class="modal fade" id="updateForm" tabindex="-1" role="dialog" aria-labelledby="updateFormTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="updateFormTitle1">编辑内容</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="updateForm-input0">ID</span>
                          </div>
                          <input v-model="itemUpdate.id" type="text" class="form-control" placeholder="请输入ID" aria-label="Username" aria-describedby="updateForm-input0">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="updateForm-input1">名称</span>
                          </div>
                          <input v-model="itemUpdate.mingcheng" type="text" class="form-control" placeholder="请输入名称" aria-label="Username" aria-describedby="updateForm-input1">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="updateForm-input2">描述</span>
                          </div>
                          <input v-model="itemUpdate.laiyuan" type="text" class="form-control" placeholder="请输入描述" aria-label="Username" aria-describedby="updateForm-input2">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="updateForm-input3">现价</span>
                          </div>
                          <input v-model="itemUpdate.paiming" type="text" class="form-control" placeholder="请输入现价" aria-label="Username" aria-describedby="updateForm-input3">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="updateForm-input4">原价</span>
                          </div>
                          <input v-model="itemUpdate.smhot" type="text" class="form-control" placeholder="请输入原价" aria-label="Username" aria-describedby="updateForm-input4">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="updateForm-input5">销量</span>
                          </div>
                          <input v-model="itemUpdate.zhishu" type="text" class="form-control" placeholder="请输入销量" aria-label="Username" aria-describedby="updateForm-input5">
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateData">确定</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!--删除-->
                <button type="button"  class="btn btn-danger btn-sm" style="padding: .375rem .59rem;font-size: 0.8rem;" data-toggle="modal" data-target="#deleteForm" @click="deleteFormShow(item)">删除</button>
                <!-- Modal -->
                <div class="modal fade" id="deleteForm"  tabindex="-1" role="dialog" aria-labelledby="deleteFormTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="deleteFormTitle">删除</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        确定删除该条数据么？
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="deleteData">确定</button>
                      </div>
                    </div>
                  </div>
                </div></td>
            </tr>
            </tbody>
          </table>
          </div>
      </div>
        <!--分页器-->
        <div class="row">
          <div class="col-sm-12 col-md-7" style="padding-left: 369px">
            <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_1_paginate">
              <ul class="pagination">
                <li class="paginate_button page-item previous disabled" id="DataTables_Table_1_previous"><a href="#" aria-controls="DataTables_Table_1" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li>
                <li class="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_1" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                <li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" data-dt-idx="2" tabindex="0" class="page-link">2</a></li>
                <li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" data-dt-idx="3" tabindex="0" class="page-link">3</a></li>
                <li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" data-dt-idx="4" tabindex="0" class="page-link">4</a></li>
                <li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" data-dt-idx="5" tabindex="0" class="page-link">5</a></li>
                <li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_1" data-dt-idx="6" tabindex="0" class="page-link">6</a></li>
                <li class="paginate_button page-item next" id="DataTables_Table_1_next"><a href="#" aria-controls="DataTables_Table_1" data-dt-idx="7" tabindex="0" class="page-link">Next</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
  import axios from "axios"
  import $ from 'jquery'
    export default {
        name: "IndexSectionBom",
      data(){
        return{
          num:0,
          changeFlag:true,
          bott:true,
          items:[],
          itemRead:{
            id:"",
            paiming: "",
            mingcheng: "",
            laiyuan: "",
            smhot: "",
            zhishu: ""
          },
          itemCreate:{
            id:"",
            paiming: "",
            mingcheng: "",
            laiyuan: "",
            smhot: "",
            zhishu: ""
          },
          itemUpdate:{
            id:"",
            paiming: "",
            mingcheng: "",
            laiyuan: "",
            smhot: "",
            zhishu: ""
          },
          itemDelete:{
            id:"",
            paiming: "",
            mingcheng: "",
            laiyuan: "",
            smhot: "",
            zhishu: ""
          },
        }
      },
      methods:{
        flag(){
          this.changeFlag=!this.changeFlag;
          this.bott = !this.bott
        },
        //查询
        readData(){
          axios.get("http://localhost:3000/api/crud/basic/read",{params:{mingcheng:this.itemRead.mingcheng}}).then(res=>{
            console.log(res.data);
            this.items=res.data;
          })
        },
        //增加
        createData(){
          axios.post('http://localhost:3000/api/crud/basic/create',this.itemCreate).then(res=>{
            console.log(res.data);
            this.items=res.data;
          })
        },
        //修改
        updateData(){
          axios.post('http://localhost:3000/api/crud/basic/update',this.itemUpdate).then(res=>{
            console.log(res.data);
            this.items=res.data;
          })
        },
        //删除
        deleteData(){
          axios.get('http://localhost:3000/api/crud/basic/delete',{params:{id:this.itemDelete.id}}).then(res=>{
            console.log(res.data);
            this.items=res.data;
          })
        },

        //编辑窗口取值当前行数据
        updateFormShow(item){
          for(let key in this.itemUpdate){
            this.itemUpdate[key]=item[key];
          }
        },
        //删除窗口取值当前行数据
        deleteFormShow(item){
          for(let key in this.itemDelete){
            this.itemDelete[key]=item[key];
          }
        }
      },
      created(){
        this.readData();
      }
    }


</script>
<style lang="scss" scoped>
  .sec-bom{
    margin-bottom: 20px;
    .sec-bom-header{
      padding: 21px 15px 22px 15px;
      box-sizing: border-box;
      background-color: white;
      display: flex;
      justify-content: space-between;
      p{
        font-size: 16px;
        color: #46487a;
        margin-bottom: 0;
      }
      .sec-bom-header-right{
        i{
          color: #787b8c;
          font-size: 13px;
        }
        i:nth-child(2){
          margin-left: 22px;
        }
      }
    }
    .sec-bom-txt{
      background-color: white;
      padding: 21px 15px 22px 15px;
      box-sizing: border-box;
      /*h6{*/
        /*font-size: 13px;*/
        /*color: #6b7287;*/
        /*margin-bottom: 15px;*/
      /*}*/
      .sec-bom-sel{
          display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        .sec-bom-sel-left{
          display: flex;
          h5{
            font-size: 14px;
            color: #6b7287;
            line-height: 39px;
          }
          #set{
            width: 70px;
            height: 38px;
            border-radius: 2px;
            padding-left: 15px;
            -webkit-appearance: none;
            background: url("../../../static/peng/peng02.png") no-repeat right;
            option{
              text-align: center;
            }
          }
        }
        .sec-bom-sel-right{
          display: flex;
          align-items: center;
          margin-right: 65px;
          /*添加模态窗口---------------------------------------------------------*/
          .btn-primary{
            margin-right: 10px;
          }
          .modal-body{
            height: 400px;
            text-align: center;
            input{
              width: 300px;
            }
          }
          }
          p{
            padding: 7px 12px;
            background-color: #007bff;
            font-size: 13px;
            border-radius: 5px;
            color: white;
            margin-bottom: 0;
          }
          p:nth-child(1){
            margin-right: 15px;
          }
          i{
            font-style: normal;
            font-size: 16px;
          }
        }
      }
    }
    .row{
      padding-left:25px;
      box-sizing: border-box;
      .paging_simple_numbers{
        width: 100px;
      }
    }

    /*设置增删改查*/
    .odd{
      td:last-child{
        display: flex;
        justify-content: space-around;
        padding: 10px 10px;
        box-sizing: border-box;
        p{
          padding: 10px;
          color: white;
          border: 1px solid #999;
          margin-bottom: 0;
          border-radius: 5px;
          font-size: 12px;
          background: red;
        }
        .modal-body1{
          height: 400px;
          text-align: center;
          padding: 15px;
          input{
            width: 300px;
            margin-bottom: 30px;
          }
      }
    }
  }
</style>

