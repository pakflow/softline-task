import { createElement } from "../../libs/render/utils/createElement";

import "./InfoSlice.scss";

function InfoSlice() {
  return createElement("div", { className: "info" }, [
    createElement("div", { className: "info__item" }, [
      createElement("p", { className: "info__item_counter" }, ["> 30 лет"]),
      createElement("p", { className: "info__item_title" }, ["на IT-рынке"]),
    ]),
  ]);
}

export { InfoSlice };
