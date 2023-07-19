class ThemeSwitcher extends HTMLElement {
  bodyEl = document.body;
  iconLightEl = this.querySelector(".navbar-theme-light");
  iconDarkEl = this.querySelector(".navbar-theme-dark");
  bodyDarkClass = "dark";
  iconHiddenClass = "navbar-theme-switcher-hidden";
  themeLocal = localStorage.getItem("theme");

  constructor() {
    super();
    if (this.themeLocal && this.themeLocal === "dark") this.changeToDark();
    this.iconDarkEl.addEventListener("click", this.changeToDark.bind(this));
    this.iconLightEl.addEventListener("click", this.changeToLight.bind(this));
  }

  changeToDark() {
    const checkBodyElDark = this.bodyEl.classList.contains(this.bodyDarkClass);
    if (!checkBodyElDark) {
      this.bodyEl.classList.add(this.bodyDarkClass);
      this.iconLightEl.classList.remove(this.iconHiddenClass);
      this.iconDarkEl.classList.add(this.iconHiddenClass);
      localStorage.setItem("theme", this.bodyDarkClass);
    }
  }

  changeToLight() {
    const checkBodyElDark = this.bodyEl.classList.contains(this.bodyDarkClass);
    if (checkBodyElDark) {
      this.bodyEl.classList.remove(this.bodyDarkClass);
      this.iconLightEl.classList.add(this.iconHiddenClass);
      this.iconDarkEl.classList.remove(this.iconHiddenClass);
      localStorage.removeItem("theme");
    }
  }
}

customElements.define("theme-switcher", ThemeSwitcher);
