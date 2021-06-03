<template>
<div>
  <el-tabs v-model="activeTabName" tab-position="bottom" type="border-card" style="">
    <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :name="item.name" lazy>
      <span slot="label"><i class="el-icon-date"></i>{{item.title}}</span>
      <div class="emoji" v-if="item.name==='emoji'">
        <div class='emoji-block' v-for="(emoji,key) in item.content" :key="key" @click="sendEmoji(emoji)">
          {{ emoji }}
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</div>
</template>
<script>
  export default {
    data() {
      return {
        activeTabName:"emoji",
        tabs: [{
          title: 'Tab 1',
          name: "emoji",
          content: ['😂', '🙏', '😄', '😏', '😇', '😅', '😌', '😘', '😍', '🤓', '😜', '😎', '😊', '😳', '🙄', '😱', '😒', '😔', '😷', '👿', '🤗', '😩', '😤', '😣', '😰', '😴', '😬', '😭', '👻', '👍', '✌️', '👉', '👀', '🐶', '🐷', '😹', '⚡️', '🔥', '🌈', '🍏', '⚽️', '❤️', '🇨🇳']
        }, {
          title: 'Tab 2',
          name: "pics1",
          content: ['none']
        }],
      };
    },
    methods:{
      sendEmoji(emoji){
        this.$emit('get-emoji',emoji);
        console.log('emoji sending...')
      }
    }
  };
</script>

<style lang="scss" scoped>

.el-tabs--border-card>.el-tabs__content { //修改Element默认样式，需加上important
  padding:0 !important; 
}
.emoji{
  display: flex;
  flex-wrap: wrap;
  .emoji-block {
    text-align: center;
    width:30px;
    height:30px;
    border:1px solid wheat
  }
}
</style>