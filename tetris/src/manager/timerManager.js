import GameConfig from "../config/gameConfig.js";

export default class TimerManager{
    static instance;

    constructor() {
        if(!TimerManager.instance){
            this.fallingBlockTimer = 0; // 떨어지는 블럭 시간갑을 제한하기 위한 타이머
            TimerManager.instance = this;
        }
        return TimerManager.instance;
    }

    init(){
        this.fallingBlockTimer = 0;
    }

    update(delta){
        this.fallingBlockTimer += delta;
    }

    checkBlockDropTime(){
        if(this.fallingBlockTimer > GameConfig.MainScene.TIMER_INTERVAL_BLOCK_DOWN){
            this.fallingBlockTimer = 0;
            return true;
        }
        return false;
    }

}















