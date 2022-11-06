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
    this.appendClass(".nav");
  }
}

class MyMain extends CustomElm {
  connectedCallback() {
    this.appendClass(".main");
  }
}

class MyAside extends CustomElm {
  connectedCallback() {
    this.appendClass(".aside");
  }
}

class MyFooter extends CustomElm {
  connectedCallback() {
    this.appendClass(".footer");
  }
}

customElements.define("me-nav", MyNav);
customElements.define("me-main", MyMain);
customElements.define("me-aside", MyAside);
customElements.define("me-footer", MyFooter);
