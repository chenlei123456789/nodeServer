var net = require('net')
var client = new net.socket()
client.setEncoding("utf8")
client.connect(3002,"localhost",function(){
    console.log(1111)
    client.write("hello")
})
client.on("data",function(data){
    console.log("data",function(data){
        console.log("已接受到服务器发送的数据"+data)
    })
})