const TETRIS_BLOCK_SHAPE = {
    I: [
        [
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ],
    ],
    O: [
        [
            [2,2],
            [2,2],
        ]
    ],
    T:[
        [
            [0,3,0],
            [3,3,3],
            [0,0,0],
        ],
        [
            [0,3,0],
            [0,3,3],
            [0,3,0],
        ],
        [
            [0,0,0],
            [3,3,3],
            [0,3,0],
        ],
        [
            [0,3,0],
            [3,3,0],
            [0,3,0],
        ],
    ],
    S: [
        [
            [0,4,4],
            [4,4,0],
            [0,0,0],
        ],
        [
            [4,0,0],
            [4,4,0],
            [0,4,0],
        ],
    ],
    Z: [
        [
            [5,5,0],
            [0,5,5],
            [0,0,0],
        ],
        [
            [0,5,0],
            [5,5,0],
            [5,0,0],
        ],
    ],
    L:[
        [
            [6,0,0],
            [6,6,6],
            [0,0,0],
        ],
        [
            [0,6,6],
            [0,6,0],
            [0,6,0],
        ],
        [
            [0,0,0],
            [6,6,6],
            [0,0,6],
        ],
        [
            [0,6,0],
            [0,6,0],
            [6,6,0],
        ],
    ],
    J:[
        [
            [0,0,7],
            [7,7,7],
            [0,0,0],
        ],
        [
            [0,7,0],
            [0,7,0],
            [0,7,7],
        ],
        [
            [0,0,0],
            [7,7,7],
            [7,0,0],
        ],
        [
            [7,7,0],
            [0,7,0],
            [0,7,0],
        ],
    ]
}

export default TETRIS_BLOCK_SHAPE;