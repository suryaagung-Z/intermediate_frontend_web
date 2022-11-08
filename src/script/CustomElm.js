class CustomElm extends HTMLElement {
  appendClass(className) {
    if (this.hasAttribute("data-style")) {
      this.dataStyle = this.getAttribute("data-style").split(" ");
      if (!(this.dataStyle[0] == "")) {
        const i = this.querySelector(className);
        this.dataStyle.forEach((val) => i.classList.add(val));
      }
    }
  }
}

class MyNav extends CustomElm {
  connectedCallback() {
    const setClass =
      "px-4 py-3 sm:py-7 text-white w-full bg-white relative sm:w-max sm:h-screen border-b sm:border-r border-gray-300 sticky top-0 flex justify-between sm:grid sm:grid-rows-nav sm:justify-start z-50";
    this.setAttribute("data-style", setClass);
    this.appendClass(".nav");
  }
}

class MyMain extends CustomElm {
  connectedCallback() {
    const setClass = "text-lg tracking-wide leading-8";
    this.setAttribute("data-style", setClass);
    this.appendClass(".main");
  }
}

class MyAside extends CustomElm {
  connectedCallback() {
    const setClass =
      "px-8 sm:px-16 pb-16 lg:p-7 lg:border-l border-gray-300 h-full border-dark-to-white duration-300";
    this.setAttribute("data-style", setClass);
    this.appendClass(".aside");
  }
}

class MyFooter extends CustomElm {
  connectedCallback() {
    const setClass = "p-7 border-t border-gray-300 text-sm flex flex-col gap-5";
    this.setAttribute("data-style", setClass);
    this.appendClass(".footer");
  }
}

customElements.define("me-nav", MyNav);
customElements.define("me-main", MyMain);
customElements.define("me-aside", MyAside);
customElements.define("me-footer", MyFooter);
