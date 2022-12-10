import bisnis from '../../data/bisnis.json';
import UrlParser from '../../routes/url-parser';

const DetailBisnis = {
  async render() {
    return ` 
        <section id="details">
            
        </section>
        `;
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
                    <div class="description">
                      <p>${bisnis.bisnis[id - 1].description}</p>
                    </div>
                    <div class="specification"><br>
                      ${bisnis.bisnis[id - 1].specific.join('<br>')}
                    </div>
                  </div>
        </article>`;
    };
    detailBisnis();
  },

};

export default DetailBisnis;
