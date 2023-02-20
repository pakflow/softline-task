import { createElement } from "../../libs/render/utils/createElement";

import "./InfoSlice.scss";

function InfoSlice() {
  return createElement("div", { className: "info" }, [
    createElement("div", { className: "info__item" }, [
      createElement("p", { className: "info__item_counter" }, ["> 30 лет"]),
      createElement("p", { className: "info__item_title" }, ["на IT-рынке"]),
    ]),
    createElement("div", { className: "info__item" }, [
      createElement("p", { className: "info__item_counter" }, ["4600"]),
      createElement("p", { className: "info__item_title" }, [
        "сотрудников в России",
      ]),
    ]),
    createElement("div", { className: "info__item" }, [
      createElement("p", { className: "info__item_counter" }, ["25"]),
      createElement("p", { className: "info__item_title" }, ["городов Росии"]),
    ]),
    createElement("div", { className: "info__item" }, [
      createElement("p", { className: "info__item_counter" }, ["2000 +"]),
      createElement("p", { className: "info__item_title" }, ["разработчиков"]),
    ]),
    createElement("div", { className: "info__item" }, [
      createElement("p", { className: "info__item_counter" }, ["3000 +"]),
      createElement("p", { className: "info__item_title" }, [
        "сотрудников ежегодно",
        createElement("br"),
        "проходят оценку и обучение",
      ]),
    ]),
  ]);
}

export { InfoSlice };
