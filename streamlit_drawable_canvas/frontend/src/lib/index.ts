import CircleTool from "./circle"
import CenterCircleTool from "./centercircle"
import FabricTool from "./fabrictool"
import FreedrawTool from "./freedraw"
import LineTool from "./line"
import RectTool from "./rect"
import TransformTool from "./transform"

// TODO: Should make TS happy on the Map of selectedTool --> FabricTool
const tools: any = {
  circle: CircleTool,
  centercircle: CenterCircleTool,
  freedraw: FreedrawTool,
  line: LineTool,
  rect: RectTool,
  transform: TransformTool,
}

export { tools, FabricTool }
