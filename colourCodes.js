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

    //if you customize your colour codes, you need to change the letter assigned to the colour codes above in the string value and below in the variable name

    "-":`${AEAPI.BGBlack}-`,
    r: `${AEAPI.BGred}r`,
    g: `${AEAPI.BGGreen}g`,
    y: `${AEAPI.BGYellow}y`,
    b: `${AEAPI.BGBlue}b`,
    m: `${AEAPI.BGMagenta}m`,
    c: `${AEAPI.BGCyan}c`,
    w: `${AEAPI.BGWhite}w`,
    f: `${AEAPI.BGGrey}f`,
    R: `${AEAPI.BGBrightRed}R`,
    G: `${AEAPI.BGBrightGreen}G`,
    Y: `${AEAPI.BGBrightYellow}Y`,
    B: `${AEAPI.BGBrightBlue}B`,
    M: `${AEAPI.BGBrightMagenta}m`,
    C: `${AEAPI.BGBrightCyan}C`,
    W: `${AEAPI.BGBrightWhite}W`,
    d: `${AEAPI.defaultBGColour}d`, //this equal to the bg colour set for the users terminal
    D: `${AEAPI.defaultTextColour}D`, //this equal to the text colour set for the users terminal
    "/": `${AEAPI.defaultBGColour}\n`,
    "\n": `${AEAPI.defaultBGColour}\n`
}