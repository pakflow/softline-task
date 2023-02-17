import { Banner } from "../components/Banner/Banner";
import { Navbar } from "../components/Navbar/Navbar";
import { createElement } from "../libs/render/utils/createElement";

import "./MainLayout.scss";

function MainLayout() {
  return createElement("div", { className: "mainlayout" }, [
    Navbar(),
    Banner(),
  ]);
}

export { MainLayout };
