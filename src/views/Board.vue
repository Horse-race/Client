<template>
  <div class="Board">
    <table class="chess-board">
            <tbody>
                <tr>
                    <th></th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>13</th>
                    <th>14</th>
                    <th>15</th>
                    <th>16</th>
                    <th>17</th>
                    <th>18</th>
                    <th>19</th>
                    <th>20</th>
                    <th>21</th>
                    <th>22</th>
                    <th>23</th>
                    <th>24</th>
                    <th>25</th>
                    <th>26</th>
                    <th>27</th>
                    <th>28</th>
                    <th>29</th>
                    <th>30</th>
                </tr>
                <tr v-for="user in userdata" :key="user">
                    <th>{{user.name}}</th>
                    <td class="light"><b style="color: red;" v-if="user.pos == 1"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 2"><img id="kuda" :src="user.img"></b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 3"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 4"><img id="kuda" :src="user.img"></b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 5"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 6"><img id="kuda" :src="user.img"></b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 7"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 8"><img id="kuda" :src="user.img"></b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 9"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 10"><img id="kuda" :src="user.img"></b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 11"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 12"><img id="kuda" :src="user.img"></b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 13"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 14"><img id="kuda" :src="user.img"></b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 15"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 16"><img id="kuda" :src="user.img"></b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 17"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 18"><img id="kuda" :src="user.img"></b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 19"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 20"><img id="kuda" :src="user.img"></b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 21"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 22"><img id="kuda" :src="user.img"></b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 23"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 24"><img id="kuda" :src="user.img"></b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 25"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 26"><img id="kuda" :src="user.img"></b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 27"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 28"><img id="kuda" :src="user.img"></b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 29"><img id="kuda" :src="user.img"></b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 30"><img id="kuda" :src="user.img"></b></td>
                </tr>
            </tbody>
        </table>
        <h5>ID : {{userId}}  {{stat}}</h5>
        <div class="test" v-if="stat == userId">
        <button class="btn btn-dark" @click.prevent="move" v-if="userdata.length > 1">Go</button>
        </div>
        <button @click.prevent="deleteData" v-if="winner">EXIT</button>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import socket from '../config/socket'
  export default {
    name: 'Board',
    data () {
      return {
        userdata: [],
        stat: 1,
        userId: 0,
        winner: false
      }
    },
    methods: {
      move () {
        this.stat++
        if(this.stat >this.userdata.length){
          this.stat = 1
        }
        socket.emit('round', this.stat)
        socket.on('rounds', data => {
          this.stat = data
          console.log(data)
        })
        this.userdata.forEach(user => {
          if (user.id == localStorage.id) {
            const rand = Math.ceil(Math.random(1)*6)
            user.pos += rand
            if (user.pos >= 30) {
              this.winner = true
              socket.emit('finish', user.name)
              socket.on('finish-msg', data => {
                Swal.fire({
                  title: 'The winner is '+ data,
                  width: 600,
                  padding: '3em',
                  background: '#fff url(/images/trees.png)',
                  backdrop: `
                    rgba(0,0,123,0.4)
                    url("/images/nyan-cat.gif")
                    left top
                    no-repeat
                  `
                })
              })
            }
          }
        })
        socket.emit('movement', this.userdata)
        socket.on('updated', data => {
          this.userdata = data + ' is the winner'
        })
        console.log('ok')
      },
      deleteData () {
        socket.emit('delete', true)
        localStorage.clear()
        this.$router.push('/')
      }

    },
    created () {
      this.userId = localStorage.id
      socket.on('result-login', data => {
        this.userdata = data
        console.log(this.userdata)
      })
    }
  }
</script>

<style scoped>
.Board{
  margin-top: 100px;
  width: 100%;
  height: 100%;
}

.chess-board { border-spacing: 0; border-collapse: collapse; margin-top: 200px; }
.chess-board th { padding: 10px; text-align: center; }
.chess-board td { border: 1px solid rgb(104, 88, 88);; width: 40px; height: 40px; }
.chess-board .light { background: rgb(0, 116, 25); }
.chess-board .dark { background: rgb(2, 90, 21); }
#kuda{ height: 30px; width: 30px; }
</style>