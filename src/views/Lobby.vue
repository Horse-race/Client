<template>
<div class="lobby">
    <div class="container-fluid">
        <form action="">
            <row>
            <h1>Hello, name</h1>
            <input type="text" minlength="2" placeholder="Room Name" v-model="roomName"><br>
            <button type="submit" @click.prevent="createRoom" :disabled="roomName.length < 2">create room</button>
            </row>
        </form>
        <div class="container mt-4 w-100" style="display: flex; flex-wrap: wrap;">
            <div class="w-100 text-center">
            </div>
            <Room v-for="(room) in roomList" :key="room.id" :room="room"/>
        </div>
    </div>
</div>
</template>

<script>
// import socket from '../config/socket'
import Room from '@/components/Room.vue'

export default {
    // beforeRouteEnter(to, from, next) {
    //     if (localStorage.getItem('username')) {
    //         next()
    //     }
    //     else {
    //         next(false)
    //     }
    // },
    name: 'Lobby',
    components: {
        Room
    },
    data() {
        return {
            roomName: '',
            roomList: [],
        }
    },
    mounted() {},
    methods: {
        createRoom() {
            let payload = {
                name: this.roomName,
                creator: this.username
            }
        }
    }

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
}

</style>