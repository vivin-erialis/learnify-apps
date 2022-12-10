import investasi from '../../data/investasi.json';
import UrlParser from '../../routes/url-parser';

const DetailInvestasi = {
  async render() {
    return ` 
        <section id="details">
            
        </section>
        `;
<<<<<<< HEAD
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = url;
    const investasiElement = document.querySelector('#details');
    const detailInvestasi = () => {
      investasiElement.innerHTML
            += ` <article class="module-item">
                  <div class="container" >
                    <h2>${investasi.investasi[id - 1].title}</h2>
                    <img src="${investasi.investasi[id - 1].pictureId}">
=======
      },
    
      async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const { id } = url;
        const investasiElement = document.querySelector('#details');
        const detailInvestasi = () => {
          investasiElement.innerHTML += 
            ` <article class="sub-module-item">
                  <div class="container" >
                    <h2 class="title-sub-module">${investasi.investasi[id-1].title}</h2>
                    <img src="${investasi.investasi[id-1].pictureId}">
>>>>>>> ef14314d5a7c83dcb73269d99e9640e4de776a30
                    <div class="description">
                      <p>${investasi.investasi[id - 1].description}</p>
                    </div>
                  </div>
        </article>`;
    };
    detailInvestasi();
  },

};

export default DetailInvestasi;
