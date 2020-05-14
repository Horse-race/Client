<template>
  <div class="about">
    <div class="test">
      <h1>This is an about page</h1>
    </div>
    <div class="lgbtn">
      <button class="btn btn-danger" @click.prevent="logout">Logout</button>
    </div>
  </div>
</template>
<script>
import socket from '../config/socket'

  export default {
    name: 'About',
    methods: {
      logout () {
        const username = localStorage.username
        this.$store.dispatch('logout', username)
        .then((data) => {
          this.$router.push({path: '/'})
          socket.emit('player-logout', data)
        })
      }
    }
  }
</script>
<style scoped>
  .about{
    height: 100%;
    margin-top: 100px;
  }
</style>
