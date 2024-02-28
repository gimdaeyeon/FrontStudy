import TetrisBlockI from "./tetrisBlock/iBlock.js";
import TetrisBlockJ from "./tetrisBlock/jBlock.js";
import TetrisBlockL from "./tetrisBlock/lBlock.js";
import TetrisBlockO from "./tetrisBlock/oBlock.js";
import TetrisBlockS from "./tetrisBlock/sBlock.js";
import TetrisBlockZ from "./tetrisBlock/zBlock.js";
import TetrisBlockT from "./tetrisBlock/tBlock.js";

export default class TetrisBlockFactory {
    static instance;

    constructor() {
        if (!TetrisBlockFactory.instance) {
            TetrisBlockFactory.instance = this;

            this._blocks = [
                new TetrisBlockI(),
                new TetrisBlockJ(),
                new TetrisBlockL(),
                new TetrisBlockO(),
                new TetrisBlockS(),
                new TetrisBlockT(),
                new TetrisBlockZ(),
            ]
        }
        return TetrisBlockFactory.instance
    }

    createRandomBlock(){
        return this._blocks[Math.floor(Math.random()*this._blocks.length)];
    }
}