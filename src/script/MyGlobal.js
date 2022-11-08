class MyGlobal {
  static html = document.querySelector("html");

  static core = document.querySelector("me-main #core");

  static meNav = document.querySelector("nav");

  static inputDarkMode = this.meNav.querySelectorAll(
    "#button-darkmode input#darkmode",
  );

  static iconDarkMode = this.meNav.querySelectorAll("#button-darkmode label i");

  static hamburger = this.meNav.querySelector("button#hamburger");

  static menuSm = this.meNav.querySelector("#menu-sm");

  static bgMenuSM = document.querySelector("#bg-menu-sm-on");

  static table = document.querySelector("me-main #table-core table");

  static tBody = this.table.querySelector("tbody");

  static getAllBtnSort = this.table.querySelectorAll("span#sort");

  static arrowNegara = this.table.querySelector(
    "#sort[data-name=\"negara\"] #arrow",
  );

  static search = this.core.querySelector("#box-search input#search");

  static lastUpdate = this.core.querySelector(
    "#box-lastupdate span#lastupdate",
  );

  static year = document.querySelector("me-footer span#year");

  static arrowUpDown = (arrow, typ) => {
    if (typ) {
      arrow.classList.add(
        "fa-solid",
        "fa-arrow-up",
        "text-xs",
        "pointer-events-none",
      );
      arrow.setAttribute("data-sort", "down");
    } else {
      arrow.classList.add(
        "fa-solid",
        "fa-arrow-down",
        "text-xs",
        "pointer-events-none",
      );
      arrow.setAttribute("data-sort", "up");
    }
  };
}

export default MyGlobal;
