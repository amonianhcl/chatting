<template>
  <div :class="[message.self ? 'right' : 'left', 'dialog-container']">
    <img class="avatar" src="hhh" />
    <div>
      <div class="name ">{{ message.from }}</div>
      <!-- <div class="bubble-triangle-left"/> -->
      <div class="bubble">{{ message.message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: Object,
  },
};
</script>

<style lang="scss">
.left {
  justify-content: flex-start;
  .avatar {
  }
  .name {
  }
  .bubble::before {
    content: '';
    position: absolute;
    top: 30px;
    left: 32px;
    width: 0px;
    height: 0px;
    border-top: 5px solid transparent;
    border-left: 5px solid transparent;
    border-right: 5px solid black;
    border-bottom: 5px solid transparent;
  }
}
.right {
  justify-content: flex-end;
  .avatar {
    order: 10;
  }
  .name {
    text-align: right;
  }
  .bubble {
    background-color: wheat;
  }
}
.dialog-container {
  display: flex;
  position: relative;
}
.avatar {
  display: block;
  margin: 0 5px;
  border: 1px solid black;
  width: 30px;
  height: 30px;
}
.name {
  color: grey;
}
.bubble {
  background-color: #42b983;
  border: 1px solid #42b983;
  border-radius: 5px;
  padding: 6px;
}
.bubble-triangle-left {
}
</style>
