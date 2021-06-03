<template>
  <div>
    <p>请输入你的用户名：</p>
    <input class="name" type="text" v-model="content" @keyup.enter="joinRoom"/>
    <emoji-tabs></emoji-tabs>
  </div>
</template>

<script>
import EmojiTabs from '../components/Editor/EmojiTabs.vue';


export default {
  components: { EmojiTabs },
  data(){
    return{
      content:'',
    }
  },
  methods:{
    joinRoom(){
      
      this.$store.commit('setUserInfo',{name:this.content})
      console.log(this.$store.state.userInfo);
      this.$router.push('/chat');
    }
  }
}
</script>

