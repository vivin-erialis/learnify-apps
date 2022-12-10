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

};

export default DetailKesehatan;
