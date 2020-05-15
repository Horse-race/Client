<template>
<div class="lobby">
    <div class="container-fluid">
        <form action="">
            <row>
            <h1>Hello, {{playerName}}</h1>
            <input type="text" minlength="2" placeholder="Room Name" v-model="roomName"><br>
            <button type="submit" @click.prevent="createRoom" :disabled="roomName.length < 2">create room</button>
            </row>
        </form><br>
        <div class="container mt-4 w-100" style="display: flex; flex-wrap: wrap;">
            <div class="w-100 text-center"></div>
            <Room v-for="(room) in roomList" :key="room.id" :room="room"/>
        </div>
    </div>
</div>
</template>

<script>
import io from 'socket.io-client'
import socket from '../config/socket'
import Room from '@/components/Room.vue'

export default {
    beforeRouteEnter (to, from, next) {
        if (localStorage.getItem("playerName")) {
            next()
        }
        else {
            next(false)
        }
    },
    name: 'Lobby',
    components: {
        Room
    },
    data() {
        return {
            roomName: '',
            roomList: [],
            playerName: ''
        }
    },
    mounted() {},
    methods: {
        createRoom() {
            console.log('tes masuk')
            let payload = {
                name: this.roomName,
                playerName: localStorage.playerName
            }
            socket.emit('create-room', payload)
            socket.on('get-rooms', data => { 
                this.roomList = data
            })
            // console.log(this.roomList)
        },
        listRoom() {
            socket.emit('get-rooms')
            this.loading = true
        },
        listenOnSocketEvent() {
            socket.on('get-rooms', (rooms) => {
                this.roomList = rooms
                this.loading = false
            })

            this.socket.on('room-created', (room) => {
                this.roomList.push(room)
                
            })

            socket.on('get-in-to-room', (room) => {
                room.isCreator && this.$store.commit("setIsCreator", true)
                this.$store.commit("setMyKey", room.playerKey)
                this.$store.commit("setRoom", room.name) 
                this.$store.commit("setOtherPlayers", room.players)
                this.$store.commit("setMyScore", 0)
                this.$router.push('/play') 
            })

            socket.on('update-client-room', ()=>{
                socket.emit('get-rooms')
            })
        },
        destoyed(){
            socket.off('get-rooms')
            socket.off('room-created')
            socket.off('get-in-to-room')
        }

    },
    watch: {},
    created() {
        if (socket === null) {
            this.$store.commit('setSocket',socket)
        }
        // this.$store.commit('resetState')
        this.listenOnSocketEvent()
        this.listRoom(); 
    },

}
</script>

<style>
.lobby {
    width: 100%;
    height: 100%;
}

.container-fluid {
    margin-top: 100px;
    width: 100%;
    height: 600px;
    background: url('https://cdn.clipart.email/0cfdd47a1552a2b395d4d9d1ef614f26_melbourne-cup-luncheon-2014-rainbow-beach-sports-club-rainbow-_4458-3428.png');
    background-size: 60%;
    background-repeat: no-repeat;
    text-align: center;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
}

</style>