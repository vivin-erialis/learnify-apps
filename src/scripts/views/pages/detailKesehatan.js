import kesehatan from '../../data/kesehatan.json';
import UrlParser from '../../routes/url-parser';

const DetailKesehatan = {
    async render() {
      return ` 
        <section id="details">
            
        </section>
        `;
      },
    
      async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const { id } = url;
        const kesehatanElement = document.querySelector('#details');
        const detailKesehatan = () => {
          kesehatanElement.innerHTML += 
            ` <article class="module-item">
                  <div class="container" >
                    <h2>${kesehatan.kesehatan[id-1].title}</h2>
                    <img src="${kesehatan.kesehatan[id-1].pictureId}">
                    <div class="description">
                      <p>${kesehatan.kesehatan[id-1].description}</p>
                    </div>
                  </div>
        </article>`
        };
        detailKesehatan();
        },


      };

export default DetailKesehatan;