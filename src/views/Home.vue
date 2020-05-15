<template>
  <div class="home">
    <div class="body">
      <div class="title">
        <h1>Welcome to Gallop Race!</h1>
      </div>
      <div class="d-flex justify-content-center">
        <div class="form">
          <div class="form-title">
            <h4>Please Login to Enter The Game</h4>
          </div>
          <form action="">
            <div class="text-input">
              <input type="text" placeholder="input your name" id="name-input" v-model="userdata.name">
            </div>
            <div class="submission">
              <button class="btn btn-primary" @click.prevent="login">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import socket from '../config/socket'
export default {
  name: 'Home',
  data () {
    return {
      userdata: {
        name: '',
        pos: 1,
        img: 'http://www.i2clipart.com/cliparts/0/1/5/6/clipart-horse-riding-lesson-64x64-0156.png',
        finished: false
      }
    }
  },
    methods: {
      login () {
        const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/6579')
        audio.play()
        socket.emit('login', this.userdata)
        socket.on('generate-token', data =>{
          localStorage.setItem('id', data.id)
          localStorage.setItem('name', data.name)
          this.userdata.name = ''
          this.$router.push('/game')
        })
      }
    }
}
</script>

<style scoped>

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(1000%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.home{
  width: 100%;
  height: 100%;
}
.body{
  margin-top: 50px;
}

.title{
  animation: 1s ease-out 0s 1 slideInFromLeft;
}

.form{
  padding-top: 30px;
  margin-top: 50px;
  width: 500px;
  height: 200px;
  background: rgba(167, 167, 167, 0.5);
  animation: 2s ease-in 0s fadeIn;
  border-radius: 15px;
}

.form-title{
  animation: 1.5s ease-out 0s 1 slideInFromBottom;
}

#name-input{
  width: 300px;
  text-align: center;
  border-radius: 2rem;
}

.text-input{
  margin-top: 20px;
}

.submission{
  margin-top: 20px;
}
</style>

