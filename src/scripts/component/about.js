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

      .content-profile img {
        border-radius: 100%;
        border: 2px solid white;
        padding: 8px;
      }

      .tagline-profile {
        font-size: 13px;
      }
        .content-profile {
            display: grid;
            grid-template-columns: repeat(4,1fr);
            margin-top: 10px;
            background-color: white;
        }
        .profile {
            background-color: #6998AB;
            margin: 20px;
            box-shadow: 0 4px 8px 0 #6998AB;
            border-radius: 5px;
            text-align: center;
            position: static;
            padding: 10px;

        }
        
        .tagline-profile{
          text-align: center;
          margin: 10px;
          color: white;
        }

        @media screen and (max-width:800px) {
          .content-profile {
              display: grid;
              grid-template-columns: 1fr 1fr;
          }
          .tagline-profile {
            font-size: 12px;
          }
      } 

      @media screen and (max-width: 400px) {
        .content-profile {
          display: grid;
          grid-template-columns: 1fr;
          padding: 20px;
      }
      .tagline-profile {
        font-size: 12px;
      }

      .dash-tagline {
        font-size: 20px;
        margin-top: 2px;
      }
      
    } 

    @media screen and (min-width:1200px) {
      .content-profile {
          display: grid;
          grid-template-columns: repeat(4,1fr);
      }
        .profile {
          margin: 20px;
          box-shadow: 0 4px 8px 0 #6998AB;
      }
  } 

      </style>
      <h1 class="dash-tagline">ABOUT US</h1>
      <div class="content-profile" id="about">
          <div class="profile">
            <img class="logo" src="../images/wahyu.jpg">
            <p class="tagline-profile">Dicoding SIB</p>
            <h3 class="tagline-profile">Wahyu Hadi Prabowo</h3>
          </div>
          <div class="profile" >
            <img class="logo" src="../images/vivin.jpg">
            <p class="tagline-profile">Dicoding SIB</p>
            <h3 class="tagline-profile">Vivin Erialis Puteri</h3>
          </div>
          <div class="profile" >
            <img class="logo" src="../images/viola.jpg"> 
            <p class="tagline-profile">Dicoding SIB</p>
            <h3 class="tagline-profile">Viola Yosevi</h3>
          </div>
          <div class="profile" >
            <img class="logo" src="../images/fanda.jpg">
            <p class="tagline-profile">Dicoding SIB</p>
            <h3 class="tagline-profile">Fanda Alfaridzi</h3>
          </div>
      </div>

          `;
  }
}

customElements.define('about-page', AboutPage);
