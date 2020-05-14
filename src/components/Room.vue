
<template>
    <div class="container-fluid">
        <div class="room p-2 m-2">
            <h3>{{room.name}}</h3>
            <h5>Full</h5>
            <div class="crumb" v-if="players.length < 4">
                <p class="text-left" ></p>
            </div>
            <button type="submit" v-if="players.length < 4" @click.prevent="joinRoom(room.name)">Join</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Room',
    props: ['room'],
    methods: {
        joinRoom(name) {
            let payload = {
                playerName: this.username,
                roomName: this.room.name
            }
        }
    }
}
</script>

<style>
.room {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: turquoise;
}
</style>
