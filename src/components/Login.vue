/* eslint-disable */

<template>
<div class="Loginpage">
  <div class="Login">
    <div class="bracket">
      <div class="Logintitle">
        <h1>Welcome to Horse Racer!</h1>
      </div>
      <div class="Loginform">
        <div class="body-content">
        <form @submit.prevent="login">
        <div class="content">
          <div class="row">
            <input class="text-input" type="text" placeholder="input username" v-model="playerName">
            <button type="submit" class="btn btn-primary" style="width: 80px;">Submit</button>
          </div>
        </div>
        </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import socket from '../config/socket'
  export default {
    name: 'Login',
    data () {
      return {
          playerName: ''
      }
    },
    methods: {
      login () {
        this.$router.push('/lobby')
        localStorage.setItem('playerName', this.playerName)
      }
    }, 
    created () {
      if (localStorage.playerName) {
      }
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Schoolbell&display=swap');
.Loginpage{
  width: 100%;
  height: 600px;
  background: url('https://cdn.clipart.email/0cfdd47a1552a2b395d4d9d1ef614f26_melbourne-cup-luncheon-2014-rainbow-beach-sports-club-rainbow-_4458-3428.png');
  background-size: 60%;
  background-repeat: no-repeat;
}
.Login{
  margin-top: 145px;
  display: flex;
  justify-content: center;
}
.bracket{
  margin-top: 50px;
  background: rgba(252, 252, 252, 0.35);
  height: 200px;
  width: 700px;
  -webkit-box-shadow: 15px 17px 51px -10px rgba(0,0,0,0.6);
  -moz-box-shadow: 15px 17px 51px -10px rgba(0,0,0,0.6);
  box-shadow: 15px 17px 51px -10px rgba(0,0,0,0.6);
}
.Loginform{
  display: flex;
  justify-content: center;
  width: 100%;
}
.Logintitle{
  color: black;
}
.content{
  margin-top: 50px;
}
.text-input{
  width: 500px;
  margin-right: 10px;
  border-radius: 1cm;
}
.btn{
  border-radius: 1cm;
}
.text-input::placeholder{
  text-align: center;
}
.text-input{
  text-align: center;
}
</style>