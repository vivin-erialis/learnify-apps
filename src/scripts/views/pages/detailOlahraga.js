import olahraga from '../../data/olahraga.json';
import UrlParser from '../../routes/url-parser';

const DetailOlahraga = {
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
    const olahragaElement = document.querySelector('#details');
    const detailOlahraga = () => {
      olahragaElement.innerHTML
            += ` <article class="module-item">
                  <div class="container" >
                    <h2>${olahraga.olahraga[id - 1].title}</h2>
                    <img src="${olahraga.olahraga[id - 1].pictureId}">
=======
      },
    
      async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const { id } = url;
        const olahragaElement = document.querySelector('#details');
        const detailOlahraga = () => {
          olahragaElement.innerHTML += 
            ` <article class="sub-module-item">
                  <div class="container" >
                    <h2 class="title-sub-module">${olahraga.olahraga[id-1].title}</h2>
                    <img src="${olahraga.olahraga[id-1].pictureId}">
>>>>>>> ef14314d5a7c83dcb73269d99e9640e4de776a30
                    <div class="description">
                      <p>${olahraga.olahraga[id - 1].description}</p>
                    </div>
                    <div class="specification"><br>
<<<<<<< HEAD
                      ${olahraga.olahraga[id - 1].specific.join('<br>')}
=======
                      <p>${olahraga.olahraga[id-1].specific.join('<br>')}</p>
>>>>>>> ef14314d5a7c83dcb73269d99e9640e4de776a30
                    </div>
                  </div>
        </article>`;
    };
    detailOlahraga();
  },

};

export default DetailOlahraga;
