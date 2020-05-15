<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

body {
  background: url('https://cdn.clipart.email/0cfdd47a1552a2b395d4d9d1ef614f26_melbourne-cup-luncheon-2014-rainbow-beach-sports-club-rainbow-_4458-3428.png');
  background-size: 60%;
  background-repeat: no-repeat;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  width: 100%;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
