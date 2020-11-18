input.onButtonPressed(Button.A, function () {
    if (row < 4) {
        if (row != stack) {
            playing = 0
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showIcon(IconNames.No)
        } else if (row == 0) {
            playing = 0
            basic.pause(1000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showIcon(IconNames.Happy)
        } else {
            row += -1
        }
    } else {
        stack = Col
        row += -1
    }
})
input.onButtonPressed(Button.B, function () {
    playing = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    direction = 0
    stack = 0
    Col = 0
    row = 4
    playing = 1
})
let direction = 0
let Col = 0
let stack = 0
let playing = 0
let row = 0
row = 4
playing = 1
basic.forever(function () {
    if (playing) {
        led.unplot(Col, row)
        if (direction) {
            Col += -1
            if (Col == 0) {
                direction = 0
            }
        } else {
            Col += 1
            if (Col == 4) {
                direction = 1
            }
        }
        led.plot(Col, row)
        basic.pause(100)
    }
})
