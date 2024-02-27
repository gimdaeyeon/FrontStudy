import Phaser from 'phaser';
import GameBoard from "../obj/gameBoard.js";

export default class MainScene extends Phaser.Scene{
    constructor() {
        super('MainScene');
        this.gameBoard = new GameBoard(this);
    }

    preload(){
        this.load.spritesheet('block','img/block.png',{frameWidth:64,frameHeight:64});
        this.load.spritesheet('back','img/back.png',{frameWidth:64,frameHeight:64});
    }
    create() {
        // this.add.text(100,100,'Hello World',{fill:'#0f0'})
        // this.add.image(200,200,'block',0);
        // this.add.image(200,300,'block',1);
        //
        // this.add.image(300,300,'back',0);

        this.gameBoard.init();
        this.gameBoard.render();
    }

    update(){

    }

}