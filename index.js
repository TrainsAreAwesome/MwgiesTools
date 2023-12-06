//file that npm points to, just imports everything and exports it again
export {mwgiesTools}
import {render} from "./render.js"
import {getRenderedColourCodes, getRenderedColourCodes} from "./getRenderedColourCodes.js"
import {renderText, renderText} from "./renderText.js"
import {getRenderedText, getRenderedText} from "./getRenderedText.js"
import {colourCodes, colourCodes} from "./colourCodes.js"

let mwgiesTools = () => {
    let render = render()
    let getRenderedColourCodes = getRenderedColourCodes()
    let renderText = renderText()
    let getRenderedText = getRenderedText()
    let colourCodes = colourCodes()
}