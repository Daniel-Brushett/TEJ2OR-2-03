/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daniel Brushett
 * Created on: March 10th 2026
 * This program does mathematic equations (all 4)
*/

let num1 = 8
let num2 = 2
let answer = 0

basic.showIcon(IconNames.Happy)

// Addition
input.onButtonPressed(Button.A, function () {
    answer = num1 + num2
    basic.showString("Adding")
    basic.showNumber(answer)
})

// Subtraction
input.onButtonPressed(Button.B, function () {
    answer = num1 - num2
    basic.showString("Subtract")
    basic.showNumber(answer)
})

// Multiplication
input.onButtonPressed(Button.AB, function () {
    answer = num1 * num2
    basic.showString("Multiply")
    basic.showNumber(answer)
})
// Division
input.onGesture(Gesture.Shake, function () {
    answer = num1 / num2
    basic.showString("Divide")
    basic.showNumber(answer)
})