import kesehatan from '../../data/kesehatan.json';
import UrlParser from '../../routes/url-parser';

const DetailKesehatan = {
    async render() {
      return ` 

      <style>
            main {
                  display: grid;
                  grid-template-rows: 1fr;
                  grid-row-gap: 20px;
                  width: 100%;
                  margin-bottom: 20px;
                }
      </style>
        <section id="details">
            
        </section>
        `;
      },
    
      async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const { id } = url;
        const kesehatanElement = document.querySelector('#details');
        const detailKesehatan = () => {
          kesehatanElement.innerHTML += ` 
          <article class="sub-module-item">
          <h2 class="title-sub-module">${kesehatan.kesehatan[id - 1].title}</h2>
          <img src="${kesehatan.kesehatan[id - 1].pictureId}">
          
          <div class="description">
            <p>${kesehatan.kesehatan[id - 1].description}</p>
          </div>
</article>
          </div>`;
          
        };
        detailKesehatan();
        },


      };

export default DetailKesehatan;