import { Store } from "../store/store";
import mapGeneral from "../assets/images/map_all.svg";
import moscow from "../assets/images/map_moscow.svg";
import center from "../assets/images/map_center.svg";
import northwest from "../assets/images/map_northwest.svg";
import south from "../assets/images/map_south.svg";
import volga from "../assets/images/map_volga.svg";
import ural from "../assets/images/map_ural.svg";
import siberia from "../assets/images/map_siberia.svg";
import east from "../assets/images/map_east.svg";

interface IState {
  activeCity: string;
  activeMap: HTMLElement | null;
  activeCityId: number;
  mapLoading: boolean;
}

export interface ICity {
  city: string;
  map: SVGElement & HTMLElement;
  id: number;
}

export const cities: ICity[] = [
  {
    city: "Все",
    map: mapGeneral,
    id: 1,
  },
  {
    city: "Москва",
    map: moscow,
    id: 2,
  },
  {
    city: "Центр",
    map: center,
    id: 3,
  },
  {
    city: "Северо-запад",
    map: northwest,
    id: 4,
  },
  {
    city: "Юг",
    map: south,
    id: 5,
  },
  {
    city: "Волга",
    map: volga,
    id: 6,
  },
  {
    city: "Урал",
    map: ural,
    id: 7,
  },
  {
    city: "Сибирь",
    map: siberia,
    id: 8,
  },
  {
    city: "Дальний восток",
    map: east,
    id: 9,
  },
];

const state = new Store<IState>({
  activeCity: "Все",
  activeMap: mapGeneral,
  activeCityId: 1,
  mapLoading: false,
});

export { state };
