import * as AEAPI from "ansiescapeapi" //exporting all functions of programme so people can actaully use it from npm
import {render} from "./render.js"
import {getRenderedColourCodes} from "./getRenderedColourCodes.js"
import {renderText} from "./renderText.js"
import { getRenderedText } from "./getRenderedText.js"
export {render}
export {getRenderedColourCodes}
export {renderText}
export {getRenderedText}
let testA = [
    `QWERTYUIOPASDFGHJKLZXCVBNM`,
    `DEF`
]
render(`R!RRR@R/R!RRR@R`, testA)