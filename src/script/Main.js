import "@fortawesome/fontawesome-free/css/all.css"; // Font Awesome
import "../style/index.css"; // My CSS
import tippy from "tippy.js"; // Tippy.js
import "tippy.js/dist/tippy.css"; // Tippy.js
import "tippy.js/animations/scale.css"; // Tippy.js
import "tippy.js/themes/light.css"; // Tippy.js
import "particles.js/particles.js"; // Particle JS
import Typed from "typed.js"; // Typed JS
import "./CustomElm.js"; // My Custom Element
import DataCovid from "./DataCovid.js"; // Data Covid
import MyGlobal from "./MyGlobal.js"; // Element Selector
import Feature from "./Feature.js"; // Sort Data

function Main() {
  // Tooltip Animation
  const tippyOptions = {
    theme: "",
    placement: "right",
    duration: 0,
    delay: [500, 0],
    offset: [0, 15],
  };
  tippy("[data-tippy-content]", tippyOptions);

  // Particle Animation
  const particleOptions = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 900,
        },
      },
      color: {
        value: "#000000",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.1,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 10,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };
  window.particlesJS("particles-jumbotron", particleOptions);

  // Typing Animastion
  new Typed("me-main #heading-typed", {
    strings: [
      "Memakai <span class=\"text-myblue\">masker</span>",
      "Mencuci <span class=\"text-myblue\">tangan</span>",
      "Menjaga <span class=\"text-myblue\">jarak</span>",
    ],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true,
    backDelay: 2000,
    smartBackspace: false,
  });

  // Navbar
  MyGlobal.hamburger.addEventListener("click", () => {
    const menuToggle = ["!top-full", "!opacity-100", "!visible"];
    const bgMenuToggle = ["!opacity-100", "!visible"];

    menuToggle.forEach((v) => MyGlobal.menuSm.classList.toggle(v));
    bgMenuToggle.forEach((v) => MyGlobal.bgMenuSM.classList.toggle(v));

    MyGlobal.bgMenuSM.addEventListener("click", () => {
      menuToggle.forEach((v) => MyGlobal.menuSm.classList.remove(v));
      bgMenuToggle.forEach((v) => MyGlobal.bgMenuSM.classList.remove(v));
    });
  });

  // Dark Mode
  const onDark = () => {
    MyGlobal.html.classList.add("dark");
    MyGlobal.iconDarkMode.forEach((elm) => {
      elm.classList.remove("fa-sun");
      elm.classList.add("fa-moon");
    });
    particleOptions.particles.color.value = "#FFFFFF";
    window.particlesJS("particles-jumbotron", particleOptions);
    tippyOptions.theme = "light";
    tippy("[data-tippy-content]", tippyOptions);
  };
  const onLight = () => {
    MyGlobal.html.classList.remove("dark");
    MyGlobal.iconDarkMode.forEach((elm) => {
      elm.classList.remove("fa-moon");
      elm.classList.add("fa-sun");
    });
    particleOptions.particles.color.value = "#000000";
    window.particlesJS("particles-jumbotron", particleOptions);
    tippyOptions.theme = "";
    tippy("[data-tippy-content]", tippyOptions);
  };

  const onloadDarkMode = () => {
    if (localStorage.getItem("darkmode") == null) {
      localStorage.setItem("darkmode", JSON.stringify({ value: false }));
    }
    const getDarkMode = JSON.parse(localStorage.getItem("darkmode"));
    if (getDarkMode.value) {
      onDark();
      MyGlobal.inputDarkMode.forEach((elm) => {
        elm.checked = true;
      });
    } else {
      onLight();
      MyGlobal.inputDarkMode.forEach((elm) => {
        elm.checked = false;
      });
    }
  };
  onloadDarkMode();
  MyGlobal.inputDarkMode.forEach((elm) => {
    elm.addEventListener("click", () => {
      if (elm.checked) {
        onDark();
        localStorage.setItem("darkmode", JSON.stringify({ value: true }));
      } else {
        onLight();
        localStorage.setItem("darkmode", JSON.stringify({ value: false }));
      }
    });
  });

  // Ajax
  const insDataCovid = new DataCovid();
  insDataCovid.getGlobal();
  insDataCovid.tableCountries();

  // Button Sort
  MyGlobal.getAllBtnSort.forEach((val) => {
    val.addEventListener("click", () => {
      MyGlobal.getAllBtnSort.forEach((btn) => {
        const arw = btn.querySelector("#arrow");
        if (btn.getAttribute("data-name") !== val.getAttribute("data-name")) {
          arw.removeAttribute("data-sort");
          arw.removeAttribute("class");
        }
      });

      const dataName = val.getAttribute("data-name");
      const arrow = val.querySelector("#arrow");

      arrow.removeAttribute("class");
      if (!arrow.hasAttribute("data-sort")) arrow.setAttribute("data-sort", "up");

      arrow.getAttribute("data-sort") == "up"
        ? MyGlobal.arrowUpDown(arrow, true)
        : MyGlobal.arrowUpDown(arrow, false);

      if (dataName == "negara") {
        MyGlobal.tBody.innerHTML = "";
        new DataCovid().getCountries((vals) => {
          arrow.getAttribute("data-sort") == "up"
            ? new Feature(vals).sortNegara("down")
            : new Feature(vals).sortNegara("up");
        });
      } else if (dataName == "kasus") {
        MyGlobal.tBody.innerHTML = "";
        new DataCovid().getCountries((vals) => {
          arrow.getAttribute("data-sort") == "up"
            ? new Feature(vals).sortKasus("down")
            : new Feature(vals).sortKasus("up");
        });
      } else if (dataName == "meninggal") {
        MyGlobal.tBody.innerHTML = "";
        new DataCovid().getCountries((vals) => {
          arrow.getAttribute("data-sort") == "up"
            ? new Feature(vals).sortMeninggal("down")
            : new Feature(vals).sortMeninggal("up");
        });
      }
    });
  });

  // Search
  let timer = null;
  MyGlobal.search.addEventListener("keyup", () => {
    const val = MyGlobal.search.value;
    const tr = MyGlobal.tBody.querySelectorAll("tr");
    clearTimeout(timer);
    timer = setTimeout(() => {
      tr.forEach((elm) => {
        elm.classList.add("!hidden");
        if (val.trim() == "") {
          elm.classList.remove("!hidden");
        }
        const dataName = elm
          .querySelector("#negara span#value")
          .innerText.toLowerCase();
        if (dataName.includes(val.toLowerCase().trim())) {
          elm.classList.remove("!hidden");
        }
      });
    }, 500);
  });

  // Year
  const year = new Date().getFullYear();
  MyGlobal.year.innerHTML = year;
}

export { Main };
