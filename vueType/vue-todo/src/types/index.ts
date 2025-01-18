/* eslint-disable @typescript-eslint/no-namespace*/
export namespace VueEvent {
    export interface Input<T extends EventTarget> extends InputEvent {
        target: T;
    }

    export interface Keyboard<T extends EventTarget> extends KeyboardEvent {
        target: T;
    }
}

/*
[타입의 위계]
Event -> target 속성 정의되엉 있음. target 송성 타입과 호환되어야 함
UIEvent
InputEvent
 */

// a.vue
// VueEvent.Input