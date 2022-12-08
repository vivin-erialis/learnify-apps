import olahraga from '../../data/olahraga.json';
import UrlParser from '../../routes/url-parser';

const DetailOlahraga = {
    async render() {
      return ` 
        <section id="details">
            
        </section>
        `;
      },
    
      async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const { id } = url;
        const olahragaElement = document.querySelector('#details');
        const detailOlahraga = () => {
          olahragaElement.innerHTML += 
            ` <article class="module-item">
                  <div class="container" >
                    <h2>${olahraga.olahraga[id-1].title}</h2>
                    <img src="${olahraga.olahraga[id-1].pictureId}">
                    <div class="description">
                      <p>${olahraga.olahraga[id-1].description}</p>
                    </div>
                    <div class="specification"><br>
                      ${olahraga.olahraga[id-1].specific.join('<br>')}
                    </div>
                  </div>
        </article>`
        };
        detailOlahraga();
        },


      };

export default DetailOlahraga;