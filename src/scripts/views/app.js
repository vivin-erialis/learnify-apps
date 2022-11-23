import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";
// import '../component/dashboard.js';
import DrawerInitiator from "../utils/drawer-initiator";
// import '../component/header';
// import '../component/landing-page';


class App {
  constructor({ dropbutton, dropdown, content }) {
    this._dropbutton = dropbutton;
    this._dropdown = dropdown;
    this._content = content;

    this._initialAppShell();
  
  }

  _initialAppShell(){
    DrawerInitiator.init({
      dropbutton : this._dropbutton,
      dropdown : this._dropdown,
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
