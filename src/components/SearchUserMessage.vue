<template>
  <div class="card">
    <p class="message">Repositories from users you search will appear here.</p>
  </div>
</template>

<script>
export default {
  name: 'SearchUserMessage'
}
</script>

<style scoped>
.card {
  background-color: cadetblue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  margin: 6.5px;
}

.message {
  color: black;
  font-size: large;
}
</style>