import * as AEAPI from "ansiescapeapi"; //import the ansi api, i know it says it doesnt use it, but thats because all the refrences are strings in colourCodes.js that get executed at the end
import { colourCodes } from "./colourCodes.js"; //importing the list of colour codes
export { getRenderedColourCodes }; //exporting the render function so you can use it in your files

//this function is whats called when you render something
let getRenderedColourCodes = (text) => { //the text param is the colour codes that get passed to the renderer
    let commandConstruct = [`${AEAPI.hide}`,] //this is the array that the proscesed colour codes are stored in while working on more colour codes
    let currentArrayLine = 0 //tracks how many newline chars have been prossesed, and creates a new entry in the array for each
    let loopIterations = 0 //If this var increases to over the amount of chars prosced, it means that an invalid colour code has been sent to the render, and errors out
    if (!text) { console.log("Error: getRenderedColourCodes() function called without any colours to render (getRenderedColourCodes.js)"); process.exit(1); } //this statement is true if the text var has nothing in it

    for (let currentChar = 0; currentChar < text.length; ++loopIterations) { //loop to convert each char to rendered text

        if (colourCodes[text[currentChar]]) {

            if (text[currentChar] === colourCodes.newLine || text[currentChar] === "\n") { //if the next code is a newline then this runs
                currentArrayLine = commandConstruct.length //this essentially adds an extra line to the array (an array with 1 item has a length of 1, not 0 so thats why it doesnt look like its adding anything)
                commandConstruct[currentArrayLine] = `console.log(`
                ++currentChar

            } else { //if the next code isnt a newline then this runs
                commandConstruct[currentArrayLine] += colourCodes[text[currentChar]] //looks up the colour code thats being proscesed in the colour code object and then adds the prosceded version to the render command
                ++currentChar
            }

        } else { //if the next code is invalid then this runs
            console.error(`Error: Attemted to proscess invalid colour code '${text[currentChar]}' Source: mwgiesTools, getRenderedColourCodes.js (If you changed your colour codes, make sure you did so correctly!)`);
            process.exit(1); //this triggers if an invalid colour code is detected
        }
    }
    return (commandConstruct); //returns the array of colour codes
}