const app = require('express')()// 引入express中间件
const http = require('http').Server(app) 
const cors = require('cors')
app.use(cors()); //本地服务器与页面资源存在跨域问题，配置cors允许跨域请求页面
const io = require("socket.io")(http, {   //CORS的简单请求
  cors: {
    origin: "http://localhost:8081",
    methods: ["GET", "POST"]
  }
});

//app.get('/', (req, res) => res.send('Hello')) // 初始化进入
// Routing
//app.use(express.static(path.join(__dirname, 'public')));//把页面资源路径加入服务器，防跨域
//app.use('/user', require('./router/user')) // 引入user路由

// 开启socket
io.on('connection', socket => {
  //监听socket加入聊天，广播给其他成员
  socket.on('join',(data)=>{
    socket.broadcast.emit('joinNotice',{msg:data.name+' 进入房间'})
    console.log(data)
  });
  //监听来自客户端的消息，广播给所有人
  socket.on('message',(data)=>{
    socket.broadcast.emit('message',data);
    console.log(data)
  });

  // 当客户端关闭时，向所有正在连接的客户端广播
  socket.on('disconnect', () => {
    socket.broadcast.emit('关闭')
  })
})

let server = http.listen(8080, '127.0.0.1', () => {
  let host = server.address().address
  let port = server.address().port

  console.log(`Server running at http://${host}:${port}`)
})
