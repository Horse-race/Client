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
                <tr v-for="user in lines" :key="user">
                    <th>{{user.name}}</th>
                    <td class="light"><b style="color: red;" v-if="user.pos == 1">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 2">{{user.char}}</b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 3">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 4">{{user.char}}</b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 5">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 6">{{user.char}}</b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 7">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 8">{{user.char}}</b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 9">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 10">{{user.char}}</b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 11">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 12">{{user.char}}</b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 13">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 14">{{user.char}}</b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 15">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 16">{{user.char}}</b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 17">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 18">{{user.char}}</b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 19">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 20">{{user.char}}</b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 21">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 22">{{user.char}}</b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 23">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 24">{{user.char}}</b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 25">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 26">{{user.char}}</b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 27">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 28">{{user.char}}</b></td>
                    <td class="light"><b style="color: red;" v-if="user.pos == 29">{{user.char}}</b></td>
                    <td class="dark"><b style="color: red;" v-if="user.pos == 30">{{user.char}}</b></td>
                </tr>
            </tbody>
        </table>
        <button @click.prevent="move">Go</button>
  </div>
</template>

<script>
import Lines from '@/components/Lines.vue'

  export default {
    name: 'Board',
    components: {
      Lines
    },
    data () {
      return {
        lines: [{name: 'player1', pos: 1, char: 'A'},{name: 'player2', pos: 1, char: 'B'},{name: 'player3', pos: 1, char: 'C'}],
        stat: 0
      }
    },
    methods: {
      move () {
        if(this.stat >= this.lines.length) {
          this.stat = 0
        }
        this.lines.forEach(el=>{
          if(el.name == this.lines[this.stat].name) {
            let rand = Math.ceil(Math.random()*6)
            el.pos += rand
            if (el.pos >=30 ) {
              el.pos = 30
            }
          }
        })
        this.stat++
      }
    }
  }
</script>

<style scoped>
.Board{
  margin-top: 100px;
  width: 100%;
  height: 100%;
}

.chess-board { border-spacing: 0; border-collapse: collapse; }
.chess-board th { padding: .5em; }
.chess-board td { border: 1px solid; width: 2em; height: 2em; }
.chess-board .light { background: #eee; }
.chess-board .dark { background: #000; }
</style>