class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
 
  connectedCallback(){
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
        padding: 7px;
        border-radius: 5px;
        display: flex;
        margin: 30px auto;
        top: 10px;
        background-color: white;
      }

      img {
        width: 60%;
      }
      
      .search-container > input {
        width: 20%;
        padding: 10px;
        border: 0;
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
        width: 20%;
        cursor: pointer;
        margin-left: auto;
        background-color: #406882;
        color: white;
        border: 0;
        border-radius: 10px;
        
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
        
        .search-container > button {
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
 
    this.shadowDOM.querySelector('#searchElement').addEventListener('keyup', this._clickEvent);
    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}
 
customElements.define('search-bar', SearchBar);