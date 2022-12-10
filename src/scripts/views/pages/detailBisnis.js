import bisnis from '../../data/bisnis.json';
import UrlParser from '../../routes/url-parser';

const DetailBisnis = {
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
    const bisnisElement = document.querySelector('#details');
    const detailBisnis = () => {
      bisnisElement.innerHTML
            += ` <article class="module-item">
                  <div class="container" >
                    <h2>${bisnis.bisnis[id - 1].title}</h2>
                    <img src="${bisnis.bisnis[id - 1].pictureId}">
=======
      },
    
      async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const { id } = url;
        const bisnisElement = document.querySelector('#details');
        const detailBisnis = () => {
          bisnisElement.innerHTML += 
            ` <article class="sub-module-item">
                  <div class="container" >
                    <h2 class="title-sub-module">${bisnis.bisnis[id-1].title}</h2>
                    <img src="${bisnis.bisnis[id-1].pictureId}">
>>>>>>> ef14314d5a7c83dcb73269d99e9640e4de776a30
                    <div class="description">
                      <p>${bisnis.bisnis[id - 1].description}</p>
                    </div>
                    <div class="specification"><br>
<<<<<<< HEAD
                      ${bisnis.bisnis[id - 1].specific.join('<br>')}
=======
                      <p>${bisnis.bisnis[id-1].specific.join('<br>')}</p>
>>>>>>> ef14314d5a7c83dcb73269d99e9640e4de776a30
                    </div>
                  </div>
        </article>`;
    };
    detailBisnis();
  },

};

export default DetailBisnis;
