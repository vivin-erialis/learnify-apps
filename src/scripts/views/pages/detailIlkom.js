import ilkom from '../../data/ilkom.json';
import UrlParser from '../../routes/url-parser';

const DetailIlkom = {
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
    const ilkomElement = document.querySelector('#details');
    const detailIlkom = () => {
      ilkomElement.innerHTML
            += ` <article class="module-item">
                  <div class="container" >
                    <h2>${ilkom.ilkom[id - 1].title}</h2>
                    <img src="${ilkom.ilkom[id - 1].pictureId}">
=======
      },
    
      async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const { id } = url;
        const ilkomElement = document.querySelector('#details');
        const detailIlkom = () => {
          ilkomElement.innerHTML += 
            ` <article class="sub-module-item">
                  <div class="container" >
                    <h2 class="title-sub-module">${ilkom.ilkom[id-1].title}</h2>
                    <img src="${ilkom.ilkom[id-1].pictureId}">
>>>>>>> ef14314d5a7c83dcb73269d99e9640e4de776a30
                    <div class="description">
                      <p>${ilkom.ilkom[id - 1].description}</p>
                    </div>
                    <div class="specification"><br>
<<<<<<< HEAD
                      ${ilkom.ilkom[id - 1].specific.join('<br>')}
=======
                      <p>${ilkom.ilkom[id-1].specific.join('<br>')}</p>
>>>>>>> ef14314d5a7c83dcb73269d99e9640e4de776a30
                    </div>
                  </div>
        </article>`;
    };
    detailIlkom();
  },

};

export default DetailIlkom;
