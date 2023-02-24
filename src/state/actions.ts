import { cities, ICity, state } from ".";

const handleMap = (city: ICity) => {
  state.setState({ mapLoading: true });
  cities.forEach((item) => {
    if (item.id !== city.id) return;
    state.setState({
      ...state,
      activeCity: item.city,
      activeMap: item.map,
      activeCityId: item.id,
    });
  });
  state.setState({ mapLoading: false });
};

export { handleMap };
