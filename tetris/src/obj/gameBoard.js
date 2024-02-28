import GameConfig from "../config/gameConfig.js";

export default class GameBoard {
    constructor(scene) {
        this.scene = scene;
        this.board = [];
    }

    init() {
        this._initBoard(this.board, 0);
    }

    _initBoard(tiles, value) {
        for (let i = 0; i < GameConfig.MainScene.GAME_BOARD_HEIGHT_CNT; i++) {
            let tempArr = [];
            for (let j = 0; j < GameConfig.MainScene.GAME_BOARD_WIDTH_CNT; j++) {
                tempArr.push(value)
            }
            tiles[i] = tempArr;
        }
    }

    render() {
        this._renderBackgroundGameBoard();
    }

    _renderBackgroundGameBoard() {
        for (let i = 0; i < GameConfig.MainScene.GAME_BOARD_HEIGHT_CNT; i++) {
            for (let j = 0; j < GameConfig.MainScene.GAME_BOARD_WIDTH_CNT; j++) {
                if (this.board[i][j] == 0) {
                    this.scene.add.image(j * GameConfig.MainScene.RENDER_TILE_SIZE,
                        i * GameConfig.MainScene.RENDER_TILE_SIZE,
                        GameConfig.MainScene.RENDER_TILE_SIZE, 0)
                        .setScale(GameConfig.MainScene.RENDER_TILE_SIZE / GameConfig.MainScene.RENDER_TILE_SPRITE_ORIGIN_SIZE)
                        .setOrigin(0, 0)
                    ;
                }
            }
        }
    }

}