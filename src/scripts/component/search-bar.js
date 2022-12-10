class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      .search-container {
        max-width: 100%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        display: grid;
        grid-template-columns:7fr 3fr;
        top: 10px;
        height:30px;
        background-color: white;
      }

      img {
        width: 20px;
      }
      
      .search-container > input {
        width: 80%;
        border:0;
        border-radius: 5px;
        font-weight: bold;
      }
      
      .search-container > input:focus {
        outline: 0;
        color: #406882;
      }
      
      .search-container > input:focus::placeholder {
        font-weight: bold;
        color: #406882;
      }
      
      .search-container >  input::placeholder {
        color: #406882;
        font-weight: normal;
      }
      
      .search-container > button {
        width: 100%;
        cursor: pointer;
        float:left;
        background-color: #406882;
        color: white;
        border: 0;
        border-radius: 0 5px 5px 0;
        
      }
      
      @media screen and (max-width: 550px){
        .search-container {
          flex-direction: column;
          position: static;
        }
        
        .search-container > input {
          width: 100%;
          margin-bottom: 12px;
        }
        
        .search-container  button {
          width: 100%;
        }
      }
      </style>
      <div id="search-container" class="search-container">
        <input placeholder="Search..." id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">
          <img src="./svg/search.svg">
        </button>
      </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);
