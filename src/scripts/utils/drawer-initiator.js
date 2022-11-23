const DrawerInitiator = {
    init({ dropbutton, dropdown }) {
      dropbutton.addEventListener('click', (event) => {
        this._toggleDropDown(event, dropdown);
      });
  
      dropdown.addEventListener('click', (event) => {
        this._closeDropDown(event, dropdown);
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
  
  };
  
export default DrawerInitiator;
  