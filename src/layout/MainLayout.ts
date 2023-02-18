import { Banner } from "../components/Banner/Banner";
import { InfoSlice } from "../components/InfoSlice/InfoSlice";
import { Navbar } from "../components/Navbar/Navbar";
import { createElement } from "../libs/render/utils/createElement";

import "./MainLayout.scss";

function MainLayout() {
  return createElement("div", { className: "mainlayout" }, [
    Navbar(),
    Banner(),
    InfoSlice(),
  ]);
}

export { MainLayout };
