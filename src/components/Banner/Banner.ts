import { createElement } from "../../libs/render/utils/createElement";

import "./Banner.scss";

function Banner() {
  return createElement("div", { className: "banner" }, [
    createElement("div", { className: "banner__content" }, [
      createElement("h2", { className: "banner__title" }, [
        "Поставщик услуг цифровой трансформации и кибербезопасности",
      ]),
      createElement("div", { className: "banner__btn" }, ["На сайт"]),
    ]),
    createElement("div", { className: "banner__info" }, [
      createElement("div", { className: "banner__info_title" }, [
        createElement("span", { className: "banner__info_title-header" }, [
          "Softline",
        ]),
        " – ведущий поставщик IT-решений и сервисов. Мы предлагаем комплексные IT-решения, облака, программное и аппаратное обеспечение, решения по цифровой трансформации и кибербезопасности, а также широкий спектр IT-услуг.",
      ]),
    ]),
  ]);
}

export { Banner };
