import * as AEAPI from "ansiescapeapi"; //import the ansi api, i know it says it doesnt use it, but thats because all the refrences are strings in colourCodes.js that get executed at the end
import { colourCodes } from "./colourCodes.js"; //importing the list of colour codes
export { render }; //exporting the render function so you can use it in your files

//this function is whats called when you render something
let render = (codes, text) => { //the codes param is the colour codes that get passed to the renderer, and text is for inserting text
    let commandConstruct = `${AEAPI.hide}` //this is the var that the proscesed colour codes are stored in while working on more colour codes
    let loopIterations = 0 //If this var increases to over the amount of chars prosced, it means that an invalid colour code has been sent to the render, and errors out
    let renderingText = false
    let textPortion = 0
    let textCharIndex = 0
    let currentString = null

    if (!codes) { console.log("Error: render() function called without any colours to render (render.js)"); AEAPI.errorNoise(); process.exit(1); } //this statement is true if the codes var has nothing in it

    for (let currentChar = 0; currentChar < codes.length; ++loopIterations) { //loop to convert each char to rendered codes

        if (codes[currentChar] === colourCodes.insertText) { //if the you want to insert text into your rendered codes, put a ! to start and @ for end of text portion in codes and your text as an object for the render function
            renderingText = true
            currentString = text[textPortion]
            console.log(currentString[textCharIndex])
        } else if (codes[currentChar] === colourCodes.stopText) {
            renderingText = false
            ++textPortion
        }

        if (colourCodes[codes[currentChar]]) {
            commandConstruct += colourCodes[codes[currentChar]]
            if (!renderingText) {
                commandConstruct += codes[currentChar] //looks up the colour code thats being proscesed in the colour code object and then adds the prosceded version to the render command
            } else if (currentString[textCharIndex]) {
                    commandConstruct += currentString[textCharIndex]
                    ++textCharIndex
                }

            ++currentChar
        } else {
            console.error(`Error: Attemted to proscess invalid colour code '${codes[currentChar]}' Source: mwgiesTools, render.js (If you changed your colour codes, make sure you did so correctly!)`);
            AEAPI.errorNoise()
            process.exit(1) //this triggers if an invalid colour code is detected
        }
    }
    AEAPI.printProsscedString(commandConstruct) //renders the codes
}