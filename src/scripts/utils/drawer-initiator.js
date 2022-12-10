const DrawerInitiator = {
  init({
    dropdownbutton, dropdown, button, drawer,
  }) {
    dropdownbutton.addEventListener('click', (event) => {
      this._toggleDropDown(event, dropdown);
    });

    dropdown.addEventListener('click', (event) => {
      this._closeDropDown(event, dropdown);
    });

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    drawer.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDropDown(event, dropdown) {
    event.preventDefault();
    event.stopPropagation();
    dropdown.classList.toggle('open');
  },

  _closeDropDown(event, dropdown) {
    event.stopPropagation();
    dropdown.classList.remove('open');
  },

  _toggleDrawer(event, drawer) {
    event.preventDefault();
    event.stopPropagation();
    drawer.classList.toggle('open-drawer');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open-drawer');
  },

};

export default DrawerInitiator;
