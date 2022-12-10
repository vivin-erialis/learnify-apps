import pertanian from '../../data/pertanian.json';
import UrlParser from '../../routes/url-parser';

const DetailPertanian = {
    async render() {
      return ` 
        <section id="details">
            
        </section>
        `;
      },
    
      async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const { id } = url;
        const pertanianElement = document.querySelector('#details');
        const detailPertanian = () => {
          pertanianElement.innerHTML += 
            ` <article class="sub-module-item">
                  <div class="container" >
                    <h2 class="title-sub-module">${pertanian.pertanian[id-1].title}</h2>
                    <img src="${pertanian.pertanian[id-1].pictureId}">
                    <div class="description">
                      <p>${pertanian.pertanian[id-1].description}</p>
                    </div>
                    <div class="specification"><br>
                      <p>${pertanian.pertanian[id-1].specific.join('<br>')}<p>
                    </div>
                  </div>
        </article>`
        };
        detailPertanian();
        },


      };

export default DetailPertanian;