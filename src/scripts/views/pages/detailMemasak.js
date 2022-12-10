import memasak from '../../data/memasak.json';
import UrlParser from '../../routes/url-parser';

const DetailMemasak = {
  async render() {
    return ` 
        <section id="details">
            
        </section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = url;
    const memasakElement = document.querySelector('#details');
    const detailmemasak = () => {
      memasakElement.innerHTML
            += ` <article class="module-item">
                  <div class="container" >
                    <h2>${memasak.memasak[id - 1].title}</h2>
                    <img src="${memasak.memasak[id - 1].pictureId}">
                    <div class="bahan"><br>
                      <p>Bahan yang diperlukan : <br><br>${memasak.memasak[id - 1].bahan.join('<br>')}</p>
                    </div>
                    <div class="cara-memasak"><br>
                        <p>Cara Memasak <br><br>${memasak.memasak[id - 1].cara.join('<br>')}</p>
                    </div>
                  </div>
        </article>`;
    };
    detailmemasak();
  },

};

export default DetailMemasak;
