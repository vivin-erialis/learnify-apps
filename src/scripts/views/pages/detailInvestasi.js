import investasi from '../../data/investasi.json';
import UrlParser from '../../routes/url-parser';

const DetailInvestasi = {
    async render() {
      return ` 
        <section id="details">
            
        </section>
        `;
      },
    
      async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const { id } = url;
        const investasiElement = document.querySelector('#details');
        const detailInvestasi = () => {
          investasiElement.innerHTML += 
            ` <article class="module-item">
                  <div class="container" >
                    <h2>${investasi.investasi[id-1].title}</h2>
                    <img src="${investasi.investasi[id-1].pictureId}">
                    <div class="description">
                      <p>${investasi.investasi[id-1].description}</p>
                    </div>
                  </div>
        </article>`
        };
        detailInvestasi();
        },


      };

export default DetailInvestasi;