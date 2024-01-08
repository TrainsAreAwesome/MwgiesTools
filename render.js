import * as AEAPI from "ansiescapeapi"; //import the ansi api, i know it says it doesnt use it, but thats because all the refrences are strings in colourCodes.js that get executed at the end
import { colourCodes } from "./colourCodes.js"; //importing the list of colour codes
export { render }; //exporting the render function so you can use it in your files

//this function is whats called when you render something
let render = (codes, textArray, AEAPICode) => { //the codes param is the colour codes that get passed to the renderer, and text is for inserting text
    let commandConstruct = `${AEAPI.hide}` //this is the var that the proscesed colour codes are stored in while working on more colour codes
    let loopIterations = 0 //If this var increases to over the amount of chars prosced, it means that an invalid colour code has been sent to the render, and errors out
    let renderingText = false //this var tells the renderer if its rendering text
    let textPortion = 0 //this var keeps count of what piece of text the renderer is proscesing, while rendering text
    let textCharIndex = 0 //this keeps count of what character the renderer is rendering, while rendering text
    let currentString = "" //this stores the current piece of text being worked on when rendering text
    let currentCommand  = 0 //this stores the index of the direct AEAPI commands, if any

    if (!codes) { console.log("Error: render() function called without any colours to render (render.js)"); AEAPI.errorNoise(); process.exit(1); } //if someone tries to call the renderer to render nothing, this is called

    for (let currentChar = 0; currentChar < codes.length; ++loopIterations) { //loop to convert each char to rendered codes

        if (codes[currentChar] === colourCodes.insertText) { //if the you want to insert text into your rendered codes, put a ! to start and put your text in as an array for the render function as the 2nd param
            renderingText = true //if start rendering text
            currentString = textArray[textPortion] //sets the current string to render to the current text portion
            commandConstruct += `${AEAPI.unHide}` //lets the text be readable in the terminal
            ++currentChar //increments the current colour code to be prosccesed
            continue //skips to the next render cycle as we dont want the insertText char to mess things up with spacings
            
        } else if (renderingText && textCharIndex === currentString.length) { //if finished rendering text portion then this runs
            renderingText = false //tells renderer that it isnt rendering text
            textCharIndex = 0 //resets the current char to render index to 0
            commandConstruct += `${AEAPI.hide}` //hides text after the rendered text
            ++textPortion //increments the counter which counts the current portion of text to render next
        }

        if (codes[currentChar] === colourCodes.AEAPICode){ //if the insert custom AEAPI char is detected
            commandConstruct += AEAPICode[currentCommand] //add the command according to the index
            ++currentChar //increment the index that keeps track of the current colour code
            ++currentCommand //increment the custom command index
            continue //and continue onto the next code
        }

        if (colourCodes[codes[currentChar]]) { //if the current colour code is valid
            commandConstruct += colourCodes[codes[currentChar]]
            if (!renderingText) { //if the renderer isnt rendering text then
                commandConstruct += codes[currentChar] //look up the colour code thats being proscesed in the colour code object and then adds the prosceded version to the render command
            } else if (currentString[textCharIndex]) { //if there is text for the renderer to render
                commandConstruct += currentString[textCharIndex] //add the text to the prosscesed string
                ++textCharIndex //and increment the character to be rendered
            }
            ++currentChar //increments the current colour code being rendered
        } else { //if there was a code to render but it was invalid
            console.error(`Error: Attemted to proscess invalid colour code '${codes[currentChar]}' Source: mwgiesTools, render.js (If you changed your colour codes, make sure you did so correctly!)`); //this error gets printed out
            AEAPI.errorNoise() //the error noise plays
            process.exit(1) //and it quits with exit code 1
        }
    }
    AEAPI.printProsscedString(commandConstruct) //if sucsesfull, then this prints the rendered codes
}