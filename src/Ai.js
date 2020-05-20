export default class Ai{

    aiAlgorithm(board, player, depth = 1) {
        if (board.isGameOver()) {
            return {
                score: board.getScore() + depth,
                move: null
            }
        }
        let bestScore = player === 'o' ? -10 : 10;
        let bestMove = null;
        let moves = board.getPossibleMoves();
        for (let i = 0; i < moves.length; i++) {
            let move = moves[i];
            let newBoard = board.clone();
            newBoard.doMove(move.x, move.y, player);
            const score = this.aiAlgorithm(newBoard, player === 'x' ? 'o' : 'x', depth + 1).score;
            if ((player === 'o' && score > bestScore) || (player === 'x' && score < bestScore)) {
                bestScore = score;
                bestMove = move;
            }
        }
        return {
            score: bestScore,
            move: bestMove
        }
    }
}
