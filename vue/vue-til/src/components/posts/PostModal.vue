<template>
  <div class="modal-wrap" >
    <div class="modal-container" @click.stop>
      <div class="modal-content">
        <div class="post-title">
          {{ props.postItem.title }}
        </div>
        <div class="post-contents">
          {{ props.postItem.content }}
        </div>
      </div>
      <div class="modal-bottom">
        <div class="info-box">
          <span>
            작성자: {{props.postItem.nickname}}
          </span>
          <span class="post-time">
            {{props.postItem.modifiedDate}}
          </span>
        </div>
        <div class="modal-btn">
          <button class="btn" @click="modalClose">확인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// eslint-disable-next-line no-undef
const emit = defineEmits(['close']);
// eslint-disable-next-line no-undef
const props = defineProps(['postItem'])


function modalClose(){
  emit('close');
}

</script>

<style scoped>
.info-box{
  display: flex;
  justify-content: space-between;
  width: 450px;
}
.post-time{
  position: unset;
  display: flex;
  align-items: flex-end;
}
.post-contents{
  height: 250px;
}
.modal-bottom{
  display: flex;
  justify-content: space-between;
}

/* dimmed */
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

/* modal or popup */
.modal-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 750px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.modal-btn {
  display: flex;
  justify-content: flex-end;
}

.modal-btn button {
  margin: 0 4px;
}
</style>