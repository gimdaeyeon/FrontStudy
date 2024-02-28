import TetrisBlock from "./base.js";
import TETRIS_BLOCK_SHAPE from "./shape.js";

export default class TetrisBlockO extends TetrisBlock{
    constructor() {
        super(TETRIS_BLOCK_SHAPE.O);
    }
}