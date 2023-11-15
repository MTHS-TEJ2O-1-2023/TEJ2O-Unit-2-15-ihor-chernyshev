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
  while (loopCounter1 <= 4) {
    basic.pause(500)
    sprite.set(LedSpriteProperty.Y, loopCounter1)
    loopCounter1 = loopCounter1 + 1
    while (loopCounter <= 4) {
      basic.pause(500)
      sprite.set(LedSpriteProperty.X, loopCounter)
      loopCounter = loopCounter + 1
    }
  }
  loopCounter = 4
  loopCounter1 = 4
  while (loopCounter1 >= 0) {
    basic.pause(500)
    sprite.set(LedSpriteProperty.Y, loopCounter1)
    loopCounter1 = loopCounter1 - 1
    while (loopCounter >= 0) {
      basic.pause(500)
      sprite.set(LedSpriteProperty.X, loopCounter)
      loopCounter = loopCounter - 1
    }
  }
  sprite.delete()
  basic.pause(500)
  basic.showIcon(IconNames.Happy)
})
