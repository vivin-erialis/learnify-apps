/* eslint-disable linebreak-style */

class AboutPage extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <style>
      article{
        margin: 20px;
      }
        .content-profile {
            display: grid;
            grid-template-columns: repeat(4,1fr);
        }
        .profile {
            background-color: white;
            margin: 20px;
            box-shadow: 0 4px 8px 0 #AA8976;
            border-radius: 5px;
        }
        .tagline {
          font-size: 25px;
          text-align:center;
          margin-top: 40px
        }
        .tagline-profile{
          text-align: center;
          margin: 10px;
        }

        @media screen and (max-width: 600px) {
          .content-profile {
              display: grid;
              grid-template-columns: 1fr 1fr;
          }
      } 
    

      </style>
      <aside>
      <article>
      <h1 class="tagline">ABOUT US</h1>
      <div class="content-profile">
          <div class="profile card">
          <img class="logo" src="../images/ikon.jfif">
          <h4 class="tagline-profile">Dicoding</h4>
          <h3 class="tagline-profile">Wahyu Hadi Prabowo</h3>
          </div>

          <div class="profile card">
          <img class="logo" src="../images/ikon.jfif">
          <h4 class="tagline-profile">Dicoding</h4>
          <h3 class="tagline-profile">Vivin Erialis Puteri</h3>
          </div>

          <div class="profile card">
          <img class="logo" src="../images/ikon.jfif"> 
          <h4 class="tagline-profile">Dicoding</h4>
          <h3 class="tagline-profile">Viola Yosevi</h3>
          </div>

          <div class="profile card">
          <img class="logo" src="../images/ikon.jfif">
          <h4 class="tagline-profile">Dicoding</h4>
          <h3 class="tagline-profile">Fanda Alfaridzi</h3>
          </div>
      </div>
      </article>
      </aside>
          `;
    }
  }
  
  customElements.define('about-page', AboutPage);
  