import ilkom from '../../data/ilkom.json';
import UrlParser from '../../routes/url-parser';

const DetailIlkom = {
    async render() {
      return ` 
        <section id="details">
            
        </section>
        `;
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
                    <div class="description">
                      <p>${ilkom.ilkom[id-1].description}</p>
                    </div>
                    <div class="specification"><br>
                      <p>${ilkom.ilkom[id-1].specific.join('<br>')}</p>
                    </div>
                  </div>
        </article>`
        };
        detailIlkom();
        },


      };

export default DetailIlkom;