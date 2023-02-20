import { createElement } from "../../libs/render/utils/createElement";
import { ICity, state } from "../../state";
import { handleMap } from "../../state/actions";

export interface CityItemProps {
  city: ICity;
}

function CityItem({ city }: CityItemProps) {
  return createElement(
    "button",
    city.id !== state.getState().activeCityId
      ? {
          className: "mapslice__header_cities_item",
          onclick: () => handleMap(),
        }
      : {},
    [city.city]
  );
}

export { CityItem };
