/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ihor Chernyshev
 * Created on: Nov 2023
 * This program shows a while loop
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0
let loopCounter1 = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// press "A" button
input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()
  loopCounter = 0
  loopCounter1 = 0
  sprite = game.createSprite(0, 0)
  // goes from upper right corner to lower left corner
  while (loopCounter <= 5) {
    basic.pause(500)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter = loopCounter + 1
    // goes from left to right
    while (loopCounter1 <= 4) {
      basic.pause(500)
      sprite.set(LedSpriteProperty.X, loopCounter1)
      loopCounter1 = loopCounter1 + 1
    }
  }
  // variables
  loopCounter1 = 4
  // goes from lower left corner to upper right corner
  while (loopCounter >= 0) {
    basic.pause(500)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter = loopCounter - 1
    // goes from right to left
    while (loopCounter1 >= 0) {
      basic.pause(500)
      sprite.set(LedSpriteProperty.X, loopCounter1)
      loopCounter1 = loopCounter1 - 1
    }
  }
  basic.pause(500)
  sprite.delete()
  basic.showIcon(IconNames.Happy)
})
