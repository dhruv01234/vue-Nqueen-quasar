<template>
  <BackButton />
  <div class="chessboard-container">

    <q-card class="margin padding my-card bg-secondary text-white" color="amber">Place One Queen in one row and column
      such that No two queens attack each other</q-card>
    <div class="chessboard">
      <div v-for="row in level" :key="row" class="chessboard-row">
        <q-card v-for="col in level" :key="col" id="chessbtn" :class="getCellClass(row, col)"
          @click="changeQueenState(row, col)">
            <img v-if="board[row - 1][col - 1]" src="../assets/queen_bg.png" class="queenimg">
        </q-card>
      </div>
    </div>
    <q-btn class="margin" color="amber" glossy text-color="black" push label="Submit" @click="submitBoard" />
  </div>
  <q-dialog v-model="bar2" persistent transition-show="flip-down" transition-hide="flip-up">
    <q-card class="bg-accent text-white">
        <q-card-section>
          <div class="text-h6">{{msg}}</div>
        </q-card-section>
        <q-btn class="margin" color="amber" glossy text-color="black" push label="Exit" @click="exit"/>
        <q-btn class="margin" color="amber" glossy text-color="black" push label="Play again" @click="playAgain" />
      </q-card>
    </q-dialog>
</template>
  
<script>
import BackButton from './Back.vue'
export default {
  name: 'LevelComp',
  data() {
    return {
      board: [],
      bar2:false,
      msg:"Oops! Try again"
    }
  },
 
  computed: {
    level() {
      return parseInt(this.$route.params.level);
    }
  },
  components: {
    BackButton,
  },
  beforeMount() {
    this.initializeBoard();
  },
  mounted() {
    this.setCellSize();
    window.addEventListener('resize', this.setCellSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setCellSize);
  },
  methods: {
    initializeBoard() {
      this.board = []
      for (let i = 0; i < this.level; i++) {
        let arr = [];
        for (let j = 0; j < this.level; j++) {
          arr.push(false);
        }
        this.board.push(arr);
      }
    },
exit(){
this.bar2 = false
this.$router.push('/home')
},
playAgain(){
  this.bar2 = false;
  this.initializeBoard();
},
    getCellClass(row, col) {
      return (row + col) % 2 === 0 ? 'white-cell' : 'black-cell';
    },
    setCellSize() {
      const container = document.querySelector('.chessboard-container');
      const minDimension = Math.min(container.offsetWidth, container.offsetHeight);
      const cellSize = Math.floor(minDimension / this.level) - 10;

      const chessboardCells = document.querySelectorAll('.chessboard-row div');

      chessboardCells.forEach(cell => {
        cell.style.width = cellSize - 20 + 'px';
        cell.style.height = cellSize - 20 + 'px';
      });
    },
    changeQueenState(row, col) {
      this.board[row - 1][col - 1] = !this.board[row - 1][col - 1]
      for (let i = 0; i < this.board.length; i++) {
        if (i != col - 1 && this.board[row - 1][i] && this.board[row - 1][col - 1]) {
          this.board[row - 1][i] = false;
        }
      }

    },
   
    isValidNQueenBoard(board){
      const n = board.length;
      let c = 0;
      for (let i = 0; i < n; i++) {
        let rowCount = 0;
        let colCount = 0;
        for (let j = 0; j < n; j++) {
          rowCount += board[i][j];
          colCount += board[j][i];
          c += board[i][j];
          if (rowCount > 1 || colCount > 1) {
            return false;
          }
        }
      }
      if (c != n) return false;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (board[i][j]) {
            let x = i - 1;
            let y = j + 1;
            while (x >= 0 && y < n) {
              if (board[x][y]) {
                return false;
              }
              x--;
              y++;
            }
            x = i + 1;
            y = j + 1;
            while (x < n && y < n) {
              if (board[x][y]) {
                return false;
              }
              x++;
              y++;
            }
            x = i + 1;
            y = j - 1;
            while (x <n && y >= 0) {
              if (board[x][y]) {
                return false;
              }
              x++;
              y--;
            }
            x = i - 1;
            y = j - 1;
            while (x >= 0 && y >= 0) {
              if (board[x][y]) {
                return false;
              }
              x--;
              y--;
            }
          }
        }
      }
      return true;
    },
    submitBoard() {
      this.bar2 = true
      console.log(this.isValidNQueenBoard(this.board))
      if (this.isValidNQueenBoard(this.board)){
        this.msg = "Well done! You did it"
      }
    },

  }
};
</script>
<style scoped>


#chessbtn:hover {
  cursor: pointer;
}

.queenimg {
  width: 100%;
}

.chessboard-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.heading {
  text-align: center;
  margin: 20px 0;
}

.chessboard {
  display: flex;
  flex-direction: column;
}

.chessboard-row {
  display: flex;
}


.submit-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
  