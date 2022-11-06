class MyGlobal {
  static hamburger = document.querySelector("me-nav button#hamburger");

  static menuSm = document.querySelector("me-nav #menu-sm");

  static bgMenuSM = document.querySelector("#bg-menu-sm-on");

  static table = document.querySelector("me-main #table-core table");

  static tBody = this.table.querySelector("tbody");

  static getAllBtnSort = this.table.querySelectorAll("span#sort");

  static arrowNegara = this.table.querySelector("#sort[data-name=\"negara\"] #arrow");

  static search = this.table.querySelector("input#search");

  static lastUpdate = this.table.querySelector("span#lastupdate");

  static year = document.querySelector("me-footer span#year");

  static arrowUpDown = (arrow, typ) => {
    if (typ) {
      arrow.classList.add("fa-solid", "fa-arrow-up", "text-xs", "pointer-events-none");
      arrow.setAttribute("data-sort", "down");
    } else {
      arrow.classList.add("fa-solid", "fa-arrow-down", "text-xs", "pointer-events-none");
      arrow.setAttribute("data-sort", "up");
    }
  };
}

export default MyGlobal;
