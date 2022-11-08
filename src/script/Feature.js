import numeral from "numeral";
import MyGlobal from "./MyGlobal.js"; // Element Selector

class Feature {
  constructor(countries = undefined) {
    this.arrs = countries;
  }

  sortNegara(typ) {
    this.arrs.sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();

      if (typ == "up") {
        if (x < y) return -1;
        if (x > y) return 1;
      }
      if (typ == "down") {
        if (x > y) return -1;
        if (x < y) return 1;
      }
      return 0;
    });
    this.appendChildTbodyTable(this.arrs);
  }

  sortKasus(typ) {
    this.arrs.sort((a, b) => {
      const x = a.confirmed.value;
      const y = b.confirmed.value;

      if (typ == "up") {
        return x - y;
      }
      if (typ == "down") {
        return y - x;
      }
    });
    this.appendChildTbodyTable(this.arrs);
  }

  sortMeninggal(typ) {
    this.arrs.sort((a, b) => {
      const x = a.deaths.value;
      const y = b.deaths.value;

      if (typ == "up") {
        return x - y;
      }
      if (typ == "down") {
        return y - x;
      }
    });
    this.appendChildTbodyTable(this.arrs);
  }

  appendChildTbodyTable(vals) {
    MyGlobal.tBody.innerHTML = "";
    vals.forEach((val) => {
      MyGlobal.tBody.insertAdjacentHTML(
        "beforeend",
        `
            <tr class="my-table-row">
                <td class="my-table-data" id="negara">
                  <span class="sm:hidden">Negara : </span> <span id="value">${
  val.name
}</span>
                </td>
                <td class="my-table-data">
                  <span class="sm:hidden">Kasus : </span> <span id="value">${numeral(
    val.confirmed.value,
  ).format()}</span>
                </td>
                <td class="my-table-data">
                  <span class="sm:hidden">Meninggal : </span> <span id="value">${numeral(
    val.deaths.value,
  ).format()}</span>
                </td>
            </tr>
        `,
      );
    });
  }
}

export default Feature;
