import { types } from "react-bricks/frontend"
import layout from "./layout"
import HeroUnit from "./HeroUnit"
import features from "./features"
import accordion from "./accordion"
import card from "./card"

const bricks: types.Brick[] = [HeroUnit, ...layout, ...features, ...accordion, ...card]

export default bricks
