import Phaser from 'phaser';
import GameBoard from "../obj/gameBoard.js";
import GameConfig from "../config/gameConfig.js";
import TimerManager from "../manager/timerManager.js";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
        this.gameBoard = new GameBoard(this);
        this.timeManager = new TimerManager();
    }

    preload() {
        this.load.spritesheet(GameConfig.MainScene.RENDER_TILE_SPRITE_SHEET_KEY, 'img/block.png', {
            frameWidth: GameConfig.MainScene.RENDER_TILE_SPRITE_ORIGIN_SIZE,
            frameHeight: GameConfig.MainScene.RENDER_TILE_SPRITE_ORIGIN_SIZE
        });
        this.load.spritesheet(GameConfig.MainScene.BACKGROUND_TILE_SPRITE_SHEET_KEY, 'img/back.png', {
            frameWidth: GameConfig.MainScene.RENDER_TILE_SPRITE_ORIGIN_SIZE,
            frameHeight: GameConfig.MainScene.RENDER_TILE_SPRITE_ORIGIN_SIZE
        });
    }

    create() {
        // this.add.text(100,100,'Hello World',{fill:'#0f0'})
        // this.add.image(200,200,'block',0);
        // this.add.image(200,300,'block',1);
        //
        // this.add.image(300,300,'back',0);

        //  유튜브 강의시간 39:14 https://www.youtube.com/watch?v=_xGETajBA98&t=592s
        this.gameBoard.init();
        this.gameBoard.spawnRandomBlock(5, 0);
        this.gameBoard.render();
    }

    update(time, delta) {
        this.timeManager.update(delta);
        this.gameBoard.update(time,delta);
        this.gameBoard.render();
    }

}