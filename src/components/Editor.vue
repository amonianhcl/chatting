<template>
  <!-- 编辑器 -->
  <div >
    <!-- 操作栏 -->
    <div class="options">
      <i class="el-icon-picture" v-popover:popemoji />
      <i class="el-icon-picture" />
      <i class="el-icon-paperclip" />
      <i class="el-icon-info" v-popover:popover />
    </div>
    <!-- 操作的弹出框 -->
    <el-popover
      ref="popemoji"
      placement="top-start"
      width="400"
      top="140"
      trigger="click"
      popper-class="el-popover"
    >
    <emoji-tabs @get-emoji="insertEmoji"></emoji-tabs>
    </el-popover>
    

    <el-popover
      ref="popover"
      placement="top-start"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
    </el-popover>
    <!-- 文本区 -->
    <textarea ref="textarea" autofocus="true" @keyup.enter="submit"></textarea>
    <!-- 提交按钮 -->
    <div class="submit-button">
      <el-button size="small" type="success" @click="submit">发 送</el-button>
    </div>
  </div>
</template>

<script>
import EmojiTabs from './Editor/EmojiTabs.vue';
export default {
  components: { EmojiTabs },
  methods:{
    insertEmoji(emoji){  //简单的插入表情
      console.log(emoji)
      let otextarea= this.$refs.textarea;
      otextarea.value+=emoji;

    },
    submit(){
      this.$emit('submit',this.$refs.textarea.value)
      this.$refs.textarea.value="";//清空输入框
    }
  }
};
</script>

<style lang="scss" scoped>
.el-popover {
  padding: 0;
}
.options {
  display: flex;

  i {
    color: grey;
  }
  .el-icon-paperclip {
    flex: 1;
  }
}
textarea {
  height: 200px;
  width: 100%;
  border: none;
}
.submit-button {
  display: flex;
  justify-content: flex-end;
  el-button {
  }
}
</style>
