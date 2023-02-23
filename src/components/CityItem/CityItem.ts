import { createElement } from "../../libs/render/utils/createElement";
import { ICity, state } from "../../state";
import { handleMap } from "../../state/actions";

export interface CityItemProps {
  city: ICity;
}

function CityItem({ city }: CityItemProps) {
  return createElement(
    "button",
    {
      className:
        city.id !== state.getState().activeCityId
          ? "mapslice__header_cities_item"
          : "mapslice__header_cities_item active",
      onclick: () => handleMap(city),
    },
    [city.city]
  );
}

export { CityItem };
