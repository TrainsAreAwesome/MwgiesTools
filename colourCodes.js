import * as AEAPI from "ansiescapeapi"
export {colourCodes}
let colourCodes = { //exporting the colour codes so other files can use them


    //customize your colour codes here
    black: ("-"),
    red: ("r"),
    green: ("g"),
    yellow: ("y"),
    blue: ("b"),
    magenta: ("m"),
    cyan: ("c"),
    white: ("w"),
    grey: ("f"),
    gray: ("f"),
    brightRed: ("R"),
    brightGreen: ("G"),
    brightYellow: ("Y"),
    brightBlue: ("B"),
    brightMagenta: ("M"),
    brightCyan: ("C"),
    brightWhite: ("W"),
    defaultBGColour: (`d`), //this equal to the bg colour set for the users terminal
    defaultTextColour: (`D`), //this equal to the text colour set for the users terminal
    newLine: ("/"), //you can also use \n
    //the next codes are "continous", aka continue until stopped
    insertText: ("!"),
    stopText: (`@`),

    //if you customize your colour codes, you need to change the letter assigned to the colour codes above in the string value and below in the variable name

    "-":`${AEAPI.BGBlack}`,
    r: `${AEAPI.BGred}`,
    g: `${AEAPI.BGGreen}`,
    y: `${AEAPI.BGYellow}`,
    b: `${AEAPI.BGBlue}`,
    m: `${AEAPI.BGMagenta}`,
    c: `${AEAPI.BGCyan}`,
    w: `${AEAPI.BGWhite}`,
    f: `${AEAPI.BGGrey}`,
    R: `${AEAPI.BGBrightRed}`,
    G: `${AEAPI.BGBrightGreen}`,
    Y: `${AEAPI.BGBrightYellow}`,
    B: `${AEAPI.BGBrightBlue}`,
    M: `${AEAPI.BGBrightMagenta}`,
    C: `${AEAPI.BGBrightCyan}`,
    W: `${AEAPI.BGBrightWhite}`,
    d: `${AEAPI.defaultBGColour}`, //this equal to the bg colour set for the users terminal
    D: `${AEAPI.defaultTextColour}`, //this equal to the text colour set for the users terminal
    "/": `${AEAPI.defaultBGColour}\n`,
    "\n": `${AEAPI.defaultBGColour}\n`,
    //the next codes are "continous", aka continue until stopped
    "!": `${AEAPI.unHide}`,
}