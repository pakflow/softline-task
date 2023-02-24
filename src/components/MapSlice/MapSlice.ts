import { createElement } from "../../libs/render/utils/createElement";
import { ICity, state } from "../../state";
import { CityItem } from "../CityItem/CityItem";
import pointer from "../../assets/images/selectpointer.svg";

import "./MapSlice.scss";

export interface CityListProps {
  cities: ICity[];
  loading: boolean;
}

function MapSlice({ cities, loading }: CityListProps) {
  return createElement("div", { className: "mapslice" }, [
    createElement("nav", { className: "mapslice__header" }, [
      createElement("button", { className: "mapslice__header_select-list" }, [
        "Офисы Softline ",
        createElement("img", { src: pointer, alt: "select-pointer" }),
      ]),
      createElement(
        "div",
        { className: "mapslice__header_cities" },
        cities.map((city) => CityItem({ city: city }))
      ),
    ]),
    loading
      ? createElement("span", { className: "mapslice__map_loading" }, [
          "Loading...",
        ])
      : createElement("img", {
          src: state.getState().activeMap,
          alt: "map",
          className: "mapslice__map",
        }),
  ]);
}

export { MapSlice };
