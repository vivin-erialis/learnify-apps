/* eslint-disable linebreak-style */

class HeaderApp extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <style>
      .header {
        padding: 20px;
        color:#fff;
        background-color: #6998AB;
      }
      nav {
        position: fixed;
        display: grid;
        grid-template-columns: 1fr 1fr;
        left: 0;
        top: 0;
        width: 100%;
        padding: 20px;
      }    
      nav li {
        display: inline;
        list-style-type: none;
        margin-right: 20px;
      }      
      nav a:hover {
        color: #06283D ;
      }
            
      nav a {
        font-size: 16px;
        text-decoration: none;
        color: white;
      }
      
      .nav-list {
        text-align: right;
        margin-right: 40px;
      }
      .dropdown-button {
        color: #406882;
        width: 100%;
        font-size: 14px;
        border: none;
        padding: 8px 40px;
    }
    .dropdown {
        position: relative;
        display: inline-block;
    }
    
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #406882;
        width: 100%;
        z-index: 1;
    }
    .dropdown-content a {
        padding: 10px 3px;
        text-decoration: none;
        text-align: left;
        display: block;
        font-size: 14px;
    }
    .dropdown-content a:hover {
        color: black;
    }
    .open{
      display: block;
    }

    @media screen and (min-width: 750px) {
      .header-menu {
        display: none;
      }
    }

    @media screen and (max-width: 750px) {
      nav {
        position: fixed;
        display: grid;
        grid-template-columns: 1fr 0.2fr;
        left: 0;
        top: 0;
        width: 100%;
        padding: 20px;
      }   
      .header {
        color:#fff;
        background-color: #6998AB;
      }

      .nav-list {
        -webkit-transform: translate(610px, 0);
        transform: translate(610px, 0);
        transition: transform 0.5s ease-in;
      }
      
      .open-drawer {
        -webkit-transform: translate(180px, 0);
        transform: translate(180px, 0);
        margin-top: -15px;
      }
      .nav-item {
        display: list-item;
        width: 50%;
        text-align: left;
        margin: 10px;
      }

      .header-menu {
        padding: 5px;
      }

      .sticky {
        height: 10%;
      }

      .dropdown {
        list-style-type: none;
      }

      .dropdownbutton {
        padding-left: -10px;
      }
    
    }

    
  
      </style>
      <header>
      <div class="header">            
            <nav id="drawerNavigation" class="navbar">
              <h1 class="name-apps">LEARNIFY</h1>
              <button id="hamburgerMenu" class="header-menu" aria-label="navigation-menu">☰</button>  
              <ul class="nav-list open">
                <li class="nav-item"><a href="/">HOME</a></li>
                <li class="nav-item"><a href="#/dashboard">DASHBOARD</a></li>
                <div class="dropdown nav-item">
                  <button class="dropdown-button">MODUL</button>
                  <div class="dropdown-content">
                  
                  <a href="#/bisnis">Bisnis</a>
                  <a href="#/ilkom">Ilmu Komunikasi</a>
                  <a href="#/investasi">Investasi</a>
                  <a href="#/kerajinan">Kerajinan</a>
                  <a href="#/kesehatan">Kesehatan</a>
                  <a href="#/memasak">Memasak</a>
                  <a href="#/olahraga">Olahraga</a>
                  <a href="#/pertanian">Pertanian</a>
                  
                  </div>
                  </div>
              </ul>
            </nav>
        </div>
  </header>
          `;
    }
  }
  
  customElements.define('header-app', HeaderApp);
  