import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";
import DrawerInitiator from "../utils/drawer-initiator";

class App {
  constructor({ dropdownbutton, dropdown, content, button, drawer }) {
    this._dropdownbutton = dropdownbutton;
    this._dropdown = dropdown;
    this._content = content;
    this._drawer = drawer;
    this._button = button;

    this._initialAppShell();
  
  }

  _initialAppShell(){
    DrawerInitiator.init({
      dropdownbutton : this._dropdownbutton,
      dropdown : this._dropdown,
      drawer : this._drawer,
      button : this._button,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
