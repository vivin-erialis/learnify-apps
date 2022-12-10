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
<<<<<<< HEAD
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = url;
    const kesehatanElement = document.querySelector('#details');
    const detailKesehatan = () => {
      kesehatanElement.innerHTML += ` <article class="container-detail">
                      <img src="${kesehatan.kesehatan[id - 1].pictureId}">
                      <h2>${kesehatan.kesehatan[id - 1].title}</h2>
                      <hr>
                      <div class="des">
                        ${kesehatan.kesehatan[id - 1].description}
                      </div>
        </article>`;
    };
    detailKesehatan();
  },
=======
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
>>>>>>> ef14314d5a7c83dcb73269d99e9640e4de776a30

};

export default DetailKesehatan;
