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

class MyMain extends CustomElm {
  connectedCallback() {
    const setClass = "text-lg tracking-wide leading-8";
    this.setAttribute("data-style", setClass);
    this.appendClass(".main");
  }
}

class MyAside extends CustomElm {
  connectedCallback() {
    const setClass = "px-8 pb-16 sm:px-16 lg:p-8 lg:border-l border-gray-300 h-full flex flex-col gap-16 lg:gap-8 border-dark-to-white duration-transition-darkmode";
    this.setAttribute("data-style", setClass);
    this.appendClass(".aside");
  }
}

class MyFooter extends CustomElm {
  connectedCallback() {
    const setClass = "p-8 border-t border-gray-300 text-sm flex flex-col gap-5 sm:px-16 text-dark-to-white border-dark-to-white duration-transition-darkmode";
    this.setAttribute("data-style", setClass);
    this.appendClass(".footer");
  }
}

customElements.define("me-main", MyMain);
customElements.define("me-aside", MyAside);
customElements.define("me-footer", MyFooter);
