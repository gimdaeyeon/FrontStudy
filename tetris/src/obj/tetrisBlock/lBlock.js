import TetrisBlock from "./base.js";
import TETRIS_BLOCK_SHAPE from "./shape.js";

export default class TetrisBlockL extends TetrisBlock{
    constructor() {
        super(TETRIS_BLOCK_SHAPE.L);
    }
}
