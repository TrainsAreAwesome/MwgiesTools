import chalk from "chalk"; //import chalk, i know it says it doesnt use chalk, but thats because all the chalk refrences are strings in colourCodes.js that get executed at the end with an eval() command
import { colourCodes } from "./colourCodes.js"; //importing the list of colour codes
export { render }; //exporting the render function so you can use it in your files

//this function is whats called when you render something
let render = (text) => { //the text param is the colour codes that get passed to the renderer
    let commandConstruct = `console.log(` //this is the var that the proscesed colour codes are stored in while working on more colour codes
    let loopIterations = 0 //If this var increases to over the amount of chars prosced, it means that an invalid colour code has been sent to the render, and errors out

    if (!text) {console.log("Error: render() function called without any colours to render (render.js)"); process.exit(1);} //this statement is true if the text var has nothing in it

    for (let currentChar = 0; currentChar < text.length; ++loopIterations) { //loop to convert each char to rendered text

        if (colourCodes[text[currentChar]]) { 
            commandConstruct += colourCodes[text[currentChar]] //looks up the colour code thats being proscesed in the colour code object and then adds the prosceded version to the render command
            ++currentChar
        } else {
            console.error(`Error: Attemted to proscess invalid colour code '${text[currentChar]}' Source: mwgiesTools, render.js (If you changed your colour codes, make sure you did so correctly!)`);
            process.exit(1) //this triggers if an invalid colour code is detected
        }
    }
    commandConstruct += ' chalk.reset(``))' //adds the closing braket to the console.log command
    eval(commandConstruct) //renders the text
}