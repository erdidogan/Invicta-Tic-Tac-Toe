<template>
    <section>
        <section>
            <nav class="level" style="margin-bottom: 5px;">
                <div class="level-item has-text-centered">
                   <p class="title">
                     {{ gameOverText }}
                   </p>
                </div>
            </nav>
        </section>
        <section>

            <transition name="fade"  >
                <div class="game-board" >
                    <table cellspacing="0">
                        <tr v-bind:key="n" v-for="(n, i) in 3">
                            <td @click="performMove(j, i)" v-bind:key="n" v-for="(n, j) in 3">
                                <transition name="fade">
               <span :class="{ 'red' : board.cells[j][i] === 'x', 'green': board.cells[j][i] === 'o' }"
                     v-if="board.cells[j][i] !== ''">
               {{board.cells[j][i] }}
               </span>
                                </transition>

                            </td>

                        </tr>
                    </table>
                </div>
            </transition>

        </section>

        <section style="margin-top: 15px;">

            <button class="button is-rounded" v-on:click="reset" v-show="gameOver">RESTART</button>
        </section>
    </section>

</template>

<script>
    import Logic from "../Board";
    import Ai from "../Ai";

    export default {
        name: "Board",
        data() {
            return {
                gameOver: false,
                gameOverText: '',
                board: new Logic(),
                ai: new Ai()
            }
        },

        methods: {
            reset: function reset() {
                this.gameOver = false
                this.gameOverText = ''
                this.board = new Logic();
            },
            performMove(x, y) {

                if (this.gameOver) {
                    return;
                }

                if (!this.board.doMove(x, y, 'x')) {
                    // Invalid move.
                    return;
                }

                this.$forceUpdate();

                if (this.board.isGameOver()) {
                    this.gameOver = true;
                    this.gameOverText = this.board.playerHas3InARow('x') ? 'You win!' : 'Draw';
                    return;
                }

                let aiMove = this.ai.aiAlgorithm(this.board.clone(), 'o');
                this.board.doMove(aiMove.move.x, aiMove.move.y, 'o');

                if (this.board.isGameOver()) {
                    this.gameOver = true;
                    this.gameOverText = this.board.playerHas3InARow('o') ? 'You lose!' : 'Draw';
                }

                this.$forceUpdate();
            },


        }

    }
</script>


<style scoped>
    .game-board table {
        margin: 0 auto;
    }

    .game-board td {
        font-size: 30px;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }

    .game-board tr:first-child td,
    .game-board tr:nth-child(2) td {
        border-bottom: 1px solid #ccc;
    }

    .game-board tr td:first-child,
    .game-board tr td:nth-child(2) {
        border-right: 1px solid #ccc;
    }


    .red {
        color: rgb(249, 116, 34);
    }

    .green {
        color: rgb(190, 217, 72);
    }

    .red, .green {

        font-weight: bold;
        font-size: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
