import { cities, ICity, state } from ".";

const handleMap = (city: ICity) => {
  cities.forEach((item) => {
    if (item.id !== city.id) return;
    state.setState({
      ...state,
      activeCity: item.city,
      activeMap: item.map,
      activeCityId: item.id,
    });
  });
};

export { handleMap };
