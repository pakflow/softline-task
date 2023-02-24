import { Banner } from "../components/Banner/Banner";
import { InfoSlice } from "../components/InfoSlice/InfoSlice";
import { CityListProps, MapSlice } from "../components/MapSlice/MapSlice";
import { Navbar } from "../components/Navbar/Navbar";
import { createElement } from "../libs/render/utils/createElement";

import "./MainLayout.scss";

function MainLayout({ cities, loading }: CityListProps) {
  return createElement("div", { className: "mainlayout" }, [
    Navbar(),
    Banner(),
    InfoSlice(),
    MapSlice({ cities, loading }),
  ]);
}

export { MainLayout };
