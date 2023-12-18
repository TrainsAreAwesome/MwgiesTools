# MwgiesTools
## A utility for creating a terminal based colour and pixels with NodeJS using my ANSIEscapeAPI

### DOES NOT WORK IN VSCODE TERMINAL

MwgiesTools is in very early stages of development, but includes a basic 16 colour "rendering engine" and the ability to render text. Heres how to use them!

## Colour codes:
Colour codes are single character strings that the "rendering engine" interperates as colours. You can arrange these to create images, text, games? and more!
If you look in colourCodes.js you can see the different colour codes, 17 in total (16 colours and new line). To customise the colour codes, change the string
value of what colour you want to any single character, and change the variable with the same name as the old colour code to have the same name as the new one.

## render()
If you want to render custom colours, just import the render.js file and make sure that all the files in MwgiesTools are in the same folder.
Then, use the render() command and pass in a string of colour codes to render!

## renderText()
You can render text with this function! Again, import this into your code, and put it in the same folder as the other files in MwgiesTools.
After that you can call the renderText() command! The first param is the text you want to render, 2nd is the text colour code,
3rd is the background colour code and 4th is the font (you can make your own if you want!), though you only need to fill the 1st param as defaults are set for the others

## Fonts
You can create your own font file! Just take a look at normalFont.js and make something with the same structure it does, then export the object with the array in it,
import it into renderText.js and whenever you call renderText make sure the 4th param is the name of the font you chose, not in a string.