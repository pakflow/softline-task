import { MainLayout } from "./layout/MainLayout";
import { Renderer } from "./libs/render/Render";
import { cities, state } from "./state";

import "./assets/css/global.scss";

const dom = new Renderer();
const root = document.getElementById("root");

function render() {
  dom.render(
    MainLayout({ cities: cities, loading: state.getState().mapLoading }),
    root
  );
}

state.subscribe(render);

render();
