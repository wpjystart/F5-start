var fs = require('fs');

module.exports={
  //增加json文件中的对象
  "createJson":function createJson(params) {
    //现将json文件读出来
    let data = fs.readFileSync('./basic.json');
    var items = data.toString();//将二进制的数据转换为字符串
    items = JSON.parse(items);//将字符串转换为json对象
    items.push(params);//将传来的对象push进数组对象中
    var str = JSON.stringify(items, null, 4);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
    fs.writeFile('./basic.json',str,function(err){
      if(err){
        console.error(err);
      }
      console.log('----------新增成功-------------');
    });
    return items;
  },
  //更新json文件中的对象
  "updateJson":function updateJson(id,params) {
    let data = fs.readFileSync('./basic.json')
    var items = data.toString();
    items = JSON.parse(items);
    //把数据读出来,然后进行修改
    for(var i = 0; i < items.length;i++){
      if(id == items[i].id){
        for(var key in params){
          if(items[i][key]!=null){
            items[i][key] = params[key];
          }
        }
      }
    }
    var str = JSON.stringify(items, null, 4);
    fs.writeFile('./basic.json',str,function(err){
      if(err){
        console.error(err);
      }
      console.log('---------修改成功-----------');
    });
    return items;
  },
  //查询json文件中的对象
  "readJson":function readJson(name){
    let data= fs.readFileSync('./basic.json')
    var items = data.toString();
    items = JSON.parse(items);
    //如果name存在则查找某项
    if(name){
      for(var i = 0; i < items.length;i++){
        if(name == items[i].mingcheng){
          console.log('-------------查询单个数据成功-----------');
          return [items[i]];
        }
      }
      //若name没找到则返回空
      return null;
    }
    //如果name不存在则返回所有
    console.log('-------------查询所有数据成功-----------');
    return items;
  },
  //删除json文件中的对象
  "deleteJson":function deleteJson(id){
    let data= fs.readFileSync('./basic.json');
    var items = data.toString();
    items = JSON.parse(items);
    //把数据读出来删除
    for(var i = 0; i < items.length;i++){
      if(id == items[i].id){
        console.log(items[i])
        items.splice(i,1);
      }
    }
    var str = JSON.stringify(items, null, 4);
    //然后再把数据写进去
    fs.writeFile('./basic.json',str,function(err){
      if(err){
        console.error(err);
      }
      console.log("----------删除成功------------");
    });
    return items;
  }
}
