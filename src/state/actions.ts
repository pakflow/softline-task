import { cities, state } from ".";

const handleMap = () => {
  cities.forEach((item) => {
    state.setState({
      ...state,
      activeCity: item.city,
      activeMap: item.map,
      activeCityId: item.id,
    });
  });
};

export { handleMap };
