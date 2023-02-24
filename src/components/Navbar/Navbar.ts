import { createElement } from "../../libs/render/utils/createElement";

import logo from "../../assets/images/softlinelogo.svg";
import "./Navbar.scss";

function Navbar() {
  return createElement("nav", { className: "navbar" }, [
    createElement("img", {
      src: logo,
      alt: "logo",
      className: "navbar__logo",
    }),
    createElement("div", { className: "navbar__btns" }, [
      createElement("button", { className: "navbar__btns_item" }, [
        createElement("strong", {}, ["Облачные решения"]),
      ]),
      createElement("button", { className: "navbar__btns_item" }, [
        createElement("strong", {}, ["Кибербезопасность"]),
      ]),
      createElement("button", { className: "navbar__btns_item" }, [
        createElement("strong", {}, ["Импортозамещение"]),
      ]),
      createElement("button", { className: "navbar__btns_item" }, [
        createElement("strong", {}, ["Цифровая трансформация"]),
      ]),
    ]),
  ]);
}

export { Navbar };
