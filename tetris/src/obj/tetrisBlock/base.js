import GameConfig from "../../config/gameConfig.js";
import GameBoard from "../gameBoard.js";
export default class TetrisBlock{
    constructor(tiles) {
        this.tiles = tiles;
        this.currentTile = tiles[0];
        this.width = this.currentTile[0].length;
        this.height = this.currentTile.length;
        this.x = undefined;
        this.y = undefined;
    }

    setPosition(x,y){
        this.x = x;
        this.y= y;
    }

    getRenderInfo(){
        const startX = this.x - Math.floor(this.width/2);
        const startY = this.y;

        const endX =  startX + this.width > GameConfig.MainScene.GAME_BOARD_WIDTH_CNT? GameConfig.MainScene.GAME_BOARD_WIDTH_CNT: startX + this.width;
        const endY =  startY + this.height > GameConfig.MainScene.GAME_BOARD_HEIGHT_CNT? GameConfig.MainScene.GAME_BOARD_HEIGHT_CNT: startY + this.height;

        return {
            tiles : this.currentTile,
            startX,startY,endX,endY
        }
    }

}