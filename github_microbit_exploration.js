// This function is called every time the player does not press the appropriate button on time. It sets the variable score to 0.
function score_reset () {
    score = 0
}
// This function causes the vibration motor to vibrate, pause, then vibrate again. It is called when a player does not press the correct button on time.
function vibrate () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
// Every time the player presses the right button on time, this function is called. It increases the variable "score" by 1.
function score_increase () {
    score = score + 1
}
let direction = 0
let score = 0
// this constant is here so that the while loop continues forever. The reason we cannot use the on start loop is because we need to set the score to 0 only once in the beginning. 
let constant = 0
score = 0
basic.pause(500)
while (constant == 0) {
    // Here, a number between one and two is picked and later the random number is used to determine which LED lights up.
    direction = randint(1, 2)
    // the red LED turns on if the random number selector picks 1
    if (direction == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        // The pause gives the player time to press button A.
        basic.pause(1000)
        // If the button A is not pressed, the vibration motor turns on and a frownie face is displayed. The score is displayed and resets. 
        if (!(input.buttonIsPressed(Button.A))) {
            vibrate()
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showNumber(score)
            score_reset()
            pins.digitalWritePin(DigitalPin.P1, 0)
        } else {
            // If the proper button is pressed (button A), then a smiley face is displayed and the score increases by 1.
            if (input.buttonIsPressed(Button.A)) {
                score_increase()
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    `)
                pins.digitalWritePin(DigitalPin.P1, 0)
            }
        }
    }
    // the same code is repeated for the button B and pin 13 if 2 is the number chosen by the random number selector.
    if (direction == 2) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        basic.pause(1000)
        if (!(input.buttonIsPressed(Button.B))) {
            vibrate()
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.showNumber(score)
            score_reset()
            pins.digitalWritePin(DigitalPin.P13, 0)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                score_increase()
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    `)
                pins.digitalWritePin(DigitalPin.P13, 0)
            }
        }
    }
}
