import numeral from "numeral";
import MyGlobal from "./MyGlobal.js"; // My Global
import Feature from "./Feature.js"; // Sort Data

class DataCovid {
  constructor() {
    this.baseUrl = "https://covid19.mathdro.id/api";
    this.elmCore = document.querySelector("me-main section#core");
    this.elmTotalKasus = this.elmCore.querySelector("#total-kasus");
    this.elmTotalMeninggal = this.elmCore.querySelector("#total-meninggal");

    this.elmTd = this.elmCore.querySelector("#table-core table tbody");
  }

  getGlobal() {
    fetch(this.baseUrl)
      .then((response) => response.json())
      .then((data) => {
        this.elmTotalKasus.innerHTML = numeral(data.confirmed.value).format();
        this.elmTotalMeninggal.innerHTML = numeral(data.deaths.value).format();

        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        };
        MyGlobal.lastUpdate.innerHTML = new Date(
          data.lastUpdate,
        ).toLocaleTimeString("id", options);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  tableCountries() {
    this.getCountries((vals) => {
      const feature = new Feature(vals);
      feature.sortNegara("up");
      MyGlobal.arrowUpDown(MyGlobal.arrowNegara, true);
    });
  }

  getCountries(handle) {
    fetch(`${this.baseUrl}/countries`)
      .then((response) => response.json())
      .then((data) => {
        const countries = [];
        data.countries.forEach((val) => {
          this.getCountrie(val.name, (res) => {
            countries.push(res);
            if (countries.length == data.countries.length) {
              handle(countries);
            }
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCountrie(countrie, handle) {
    fetch(`${this.baseUrl}/countries/${countrie}`)
      .then((res) => res.json())
      .then((val) => {
        val.name = countrie;
        if (val.error != undefined) {
          console.log(`"${countrie}" not found in API`);
          val.confirmed = val.deaths = val.recovered = { value: "0" };
          val.lastUpdate = "";
        }
        handle(val);
      })
      .catch((err) => console.log(err));
  }
}

export default DataCovid;
