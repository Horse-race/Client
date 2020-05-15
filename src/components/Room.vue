
<template>
    <div class="room p-2 m-2" style="min-width:200px; box-shadow: 5px 5px 10px blue;">
        <h3>{{room.name}}</h3>
        <h5 v-if="room.players.length == 4">Full</h5>
        <div class="crumb" v-for="(player, index) in Object.keys(room.players)" :key="index">
            <p class="text-left">{{player}}</p>
        </div>
        <button type="submit" @click.prevent="joinRoom(room.name)">Join</button>
    </div>
</template>

<script>
import socket from '../config/socket'
export default {
    name: 'Room',
    props: ['room'],
    methods: {
        joinRoom(name) {
            let payload = {
                playerName: this.username,
                roomName: this.room.name
            }
            socket.emit('join-room', payload)
        }
    },
    computed : {
    players(){
      return Object.keys(this.room.players).map(key => key.split("-")[1])     
    }
  },
}
</script>

<style>
.room {
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  justify-content: flex-start;
  background-color: thistle;
}
</style>
