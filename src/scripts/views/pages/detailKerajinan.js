import kerajinan from '../../data/kerajinan.json';
import UrlParser from '../../routes/url-parser';

const DetailKerajinan = {
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
    const kerajinanElement = document.querySelector('#details');
    const detailKerajinan = () => {
      kerajinanElement.innerHTML
            += ` <article class="module-item">
                  <div class="container" >
                    <h2>${kerajinan.kerajinan[id - 1].title}</h2>
                    <img src="${kerajinan.kerajinan[id - 1].pictureId}">
=======
      },
    
      async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const { id } = url;
        const kerajinanElement = document.querySelector('#details');
        const detailKerajinan = () => {
          kerajinanElement.innerHTML += 
            ` <article class="sub-module-item">
                  <div class="container" >
                    <h2 class="title-sub-module">${kerajinan.kerajinan[id-1].title}</h2>
                    <img src="${kerajinan.kerajinan[id-1].pictureId}">
>>>>>>> ef14314d5a7c83dcb73269d99e9640e4de776a30
                    <div class="description">
                      <p>${kerajinan.kerajinan[id - 1].description}</p>
                    </div>
                    <div class="specification"><br>
<<<<<<< HEAD
                      ${kerajinan.kerajinan[id - 1].specific.join('<br>')}
=======
                      <p>${kerajinan.kerajinan[id-1].specific.join('<br>')}<p>
>>>>>>> ef14314d5a7c83dcb73269d99e9640e4de776a30
                    </div>
                  </div>
        </article>`;
    };
    detailKerajinan();
  },

};

export default DetailKerajinan;
