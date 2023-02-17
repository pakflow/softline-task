import { MainLayout } from "./layout/MainLayout";
import { Renderer } from "./libs/render/Render";

import "./assets/css/global.scss";

const dom = new Renderer();
const root = document.getElementById("root");

function render() {
  dom.render(MainLayout(), root);
}

render();
