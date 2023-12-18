import { render } from "./render.js"; //import render "api", the colour code list and the normal font
import { colourCodes } from "./colourCodes.js";
import { normal } from "./normalFont.js";
export { renderText }; //export function to call

//this function is called when you render text
let renderText = (text = "no text specified", textColour = colourCodes.white, bgColour = colourCodes.defaultBGColour, font = normal) => { //the param defaults look wierd so you can use this with different colour codes

    let colourCodeArray = [] //the array in which the proscessed font code is stored until it gets converted into a string

    for (let charIndex = 0; charIndex < text.length; ++charIndex) {  //loop through each letter/char

        let currentChar = text[charIndex] //gets the current char/letter in text
        if (!font[currentChar]) { console.log(`Error in renderText.js: Character '${currentChar}' not supported by selected font`); process.exit(1); } //checks to make sure the selected char is supported by the font, if not it throws an error
        let currentLetterToProscess = font[currentChar]//gets the current line of font code to prosess
        
        for (let lineIndex = 0; lineIndex < font.maxHeight; ++lineIndex) { //loops through each line of each char/letter
            
            let currentLineToProscess = currentLetterToProscess[lineIndex]
            if (!colourCodeArray[lineIndex]) { colourCodeArray[lineIndex] = "" } //if the current line doest exist doesnt exist in the array, this creates it
            
            for (let colourCodeIndex = 0; colourCodeIndex < font.maxWidth; ++colourCodeIndex) { //runs for each character in the font code
                
                let currentFontCodeToProscess = currentLineToProscess[colourCodeIndex] //this is the current font code char
                
                if (currentFontCodeToProscess === "#") {
                    colourCodeArray[lineIndex] += textColour
                } else {
                    colourCodeArray[lineIndex] += bgColour
                }
            }
        }
    }
    
    let finalColourCodeString = "" //the string that gets the multiline colour code pasted into it from the array, rendering in one command might stop wierd things from happening with async code
    
    for (let linesConverted = 0; linesConverted < colourCodeArray.length; ++linesConverted) { //pastes the content from colourCodeArray into finalColourCodeString
        
        finalColourCodeString += `${colourCodeArray[linesConverted]}${colourCodes.newLine}`
    }
    render(finalColourCodeString)
}