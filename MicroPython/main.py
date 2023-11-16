"""
Created by: Ihor Chernyshev
Created on: Nov 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *

# setup
display.clear()
display.show(Image.HAPPY)

while True:
    # button A
    if button_a.was_pressed():
        loop_counter = 0
        loop_counter1 = 0
        display.clear()

        while loop_counter <= 4:
            display.set_pixel(loop_counter, 0, 9)
            sleep(500)
            display.set_pixel(loop_counter, 0, 0)
            loop_counter = loop_counter + 1
            
        while loop_counter1 <= 4:
            display.set_pixel(4, loop_counter1, 9)
            sleep(500)
            display.set_pixel(4, loop_counter1, 0)
            loop_counter1 = loop_counter1 + 1
            
        loop_counter = 4
        loop_counter1 = 4
        
        while loop_counter >= 0:
            display.set_pixel(loop_counter, 4, 9)
            sleep(500)
            display.set_pixel(loop_counter, 4, 0)
            loop_counter = loop_counter - 1
            
        while loop_counter1 >= 0:
            display.set_pixel(0, loop_counter1, 9)
            sleep(500)
            display.set_pixel(0, loop_counter1, 0)
            loop_counter1 = loop_counter1 - 1
            
        display.show(Image.HAPPY)
