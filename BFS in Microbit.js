input.onButtonPressed(Button.AB, function () {
    let q_y: number[] = []
    let q_x: number[] = []
    dx = [1, 0, 0, -1]
    dy = [0, 1, -1, 0]
    q_x.push(0)
    q_y.push(0)
    while (q_x.length != 0 && q_y.length != 0) {
        basic.pause(200)
        now_x = q_x.shift()
        now_y = q_y.shift()
        if (list[now_x][now_y]) {
            continue;
        }
        led.plot(now_x, now_y)
        list[now_x][now_y] = 1
        if (now_x == 4 && now_y == 4) {
            break;
        }
        for (let k = 0; k <= 4 - 1; k++) {
            nxt_x = now_x + dx[k]
            nxt_y = now_y + dy[k]
            if (nxt_x < 5 && nxt_y < 5 && nxt_x >= 0 && nxt_y >= 0 && !(list[nxt_x][nxt_y])) {
                q_x.push(nxt_x)
                q_y.push(nxt_y)
            }
        }
    }
})
let nxt_y = 0
let nxt_x = 0
let now_y = 0
let now_x = 0
let dy: number[] = []
let dx: number[] = []
let list: number[][] = []
list = [[0, 1, 0, 0, 0], [0, 0, 1, 1, 0], [0, 1, 0, 0, 0], [0, 1, 0, 1, 0], [0, 0, 0, 1, 0]]
for (let i = 0; i <= 5 - 1; i++) {
    for (let j = 0; j <= 5 - 1; j++) {
        if (list[i][j]) {
            led.plot(i, j)
            basic.pause(100)
        }
    }
}
