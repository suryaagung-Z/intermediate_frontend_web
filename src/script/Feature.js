// import DataCovid from "./DataCovid.js"; // Data Covid
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
      MyGlobal.tBody.insertAdjacentHTML("beforeend", `
            <tr class="border-b-2 border-gray-300 hover:bg-gray-300 flex flex-col sm:table-row">
                <td class="p-2.5 flex justify-between sm:table-cell" id="negara">
                  <span class="sm:hidden">Negara : </span>${val.name}
                </td>
                <td class="p-2.5 flex justify-between sm:table-cell">
                  <span class="sm:hidden">Kasus : </span>${val.confirmed.value}
                </td>
                <td class="p-2.5 flex justify-between sm:table-cell">
                  <span class="sm:hidden">Meninggal : </span>${val.deaths.value}
                </td>
            </tr>
        `);
    });
  }
}

export default Feature;
