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
    brightRed: ("t"),
    brightGreen: ("h"),
    brightYellow: ("u"),
    brightBlue: ("n"),
    brightMagenta: ("k"),
    brightCyan: ("v"),
    brightWhite: ("e"),
    newLine: ("/"), //you can also use \n

    //if you customize your colour codes, you need to change the letter assigned to the colour codes above in the string value and below in the variable name

    "-": " chalk.reset(` `) +",
    r: " chalk.bgRed.hidden(`r`) +",
    g: " chalk.bgGreen.hidden(`g`) +",
    y: " chalk.bgYellow.hidden(`y`) +",
    b: " chalk.bgBlue.hidden(`b`) +",
    m: " chalk.bgMagenta.hidden(`m`) +",
    c: " chalk.bgCyan.hidden(`c`) +",
    w: " chalk.bgWhite.hidden(`w`) +",
    f: " chalk.bgGrey.hidden(`f`) +",
    t: " chalk.bgRedBright.hidden(`t`) +",
    h: " chalk.bgGreenBright.hidden(`h`) +",
    u: " chalk.bgYellowBright.hidden(`u`) +",
    n: " chalk.bgBlueBright.hidden(`n`) +",
    k: " chalk.bgMagentaBright.hidden(`k`) +",
    v: " chalk.bgCyanBright.hidden(`v`) +",
    e: " chalk.bgWhiteBright.hidden(`e`) +",
    "/": " chalk.reset(`\n`) +",
    "\n": " chalk.reset(`\n`) +"
}