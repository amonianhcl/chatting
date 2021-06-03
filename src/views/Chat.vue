<template>
  <div >
    <!-- 消息列表 -->
    <div class="msgList" >
      <div class="msg" v-for="(item,key) in messageList" :key="key">
        <!-- <dialog :message="item"></dialog> -->
        <Dialog :message="item"></Dialog>
      </div>
    </div>
    <!-- 富文本输入框 -->
    <input type="text" v-model.lazy="text"/>
    <button @click="sendMessage">发送消息</button>
    <editor @submit="sendMessage"></editor>
  </div>
</template>

<script>
//import axios from 'axios'; 
import * as io from 'socket.io-client';
import Dialog from '../components/Dialog.vue';
import Editor from '../components/Editor.vue';
// import {format} from '../assets/js/utils';

export default {
  name: "Chat",
  components:{
    Dialog,
    Editor
  },
  data(){
    return {
      socket: io('http://127.0.0.1:8080'),
      text:'',
      user:{name:this.$store.state.userInfo.name},
      messageList:[]
    }
  },
  created() {
    this.socket.emit('join', this.user);//向服务器发送加入聊天
    this.socket.on('message',(message)=>{ //监听来自服务器的消息
      message.self=false; //修改消息来源，来自于他人
      this.messageList.push(message);//存入本地消息列表
    })
  },
  methods:{
    sendMessage(msg){//发送消息
      let message = { //创建一条消息
        from:this.user.name,
        message:msg,
        date: new Date(),//.format("yyyy-MM-dd HH:mm:ss"),
        self:true,
        avatarUrl:'',
      }
      this.messageList.push(message);//加入本地消息列表
      this.socket.emit('message',message)//发给服务器
      
    },

  }
};
</script>

<style lang="scss" scoped>
.msgList {
  height: 200px;
  overflow:scroll;
  background-color: #EBEEF5;
  .msg {
      margin: 5px 0px;
    }
    
}

</style>
