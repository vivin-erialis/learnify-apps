import kerajinan from '../../data/kerajinan.json';
import UrlParser from '../../routes/url-parser';

const DetailKerajinan = {
  async render() {
    return ` 
        <section id="details">
            
        </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = url;
    const kerajinanElement = document.querySelector('#details');
    const detailKerajinan = () => {
      kerajinanElement.innerHTML
            += ` <article class="sub-module-item">
                  <div class="container" >
                    <h2 class="title-sub-module">${kerajinan.kerajinan[id - 1].title}</h2>
                    <img src="${kerajinan.kerajinan[id - 1].pictureId}">
                    <div class="description">
                      <p>${kerajinan.kerajinan[id - 1].description}</p>
                    </div>
                    <div class="specification"><br>
                      <p>Spesifikasi kerajinan berikut : <br><br>${kerajinan.kerajinan[id - 1].specific.join('<br>')}<p>
                    </div>
                  </div>
        </article>`;
    };
    detailKerajinan();
  },

};

export default DetailKerajinan;
