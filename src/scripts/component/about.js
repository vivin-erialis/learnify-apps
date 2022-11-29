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
            margin-top: 10px;
        }
        .profile {
            background-color: white;
            margin: 20px;
            box-shadow: 0 4px 8px 0 #6998AB;
            border-radius: 5px;
        }
        
        .tagline-profile{
          text-align: center;
          margin: 10px;
        }

        @media screen and (max-width:800px) {
          .content-profile {
              display: grid;
              grid-template-columns: 1fr 1fr;
          }
      } 

      @media screen and (max-width: 300px) {
        .content-profile {
          display: grid;
          grid-template-columns: 1fr;
          padding: 20px;
      }

      .dash-tagline {
        font-size: 20px;
        margin-top: 2px;
      }
      
    } 
    

      </style>
      <h1 class="dash-tagline">ABOUT US</h1><hr>
      <div class="content-profile">
          <div class="profile">
            <img class="logo" src="../images/ikon.jfif">
            <h4 class="tagline-profile">Dicoding</h4>
            <h3 class="tagline-profile">Wahyu Hadi Prabowo</h3>
          </div>

          <div class="profile">
            <img class="logo" src="../images/ikon.jfif">
            <h4 class="tagline-profile">Dicoding</h4>
            <h3 class="tagline-profile">Vivin Erialis Puteri</h3>
          </div>

          <div class="profile">
            <img class="logo" src="../images/ikon.jfif"> 
            <h4 class="tagline-profile">Dicoding</h4>
            <h3 class="tagline-profile">Viola Yosevi</h3>
          </div>

          <div class="profile">
            <img class="logo" src="../images/ikon.jfif">
            <h4 class="tagline-profile">Dicoding</h4>
            <h3 class="tagline-profile">Fanda Alfaridzi</h3>
          </div>
      </div>

          `;
    }
  }
  
  customElements.define('about-page', AboutPage);
  