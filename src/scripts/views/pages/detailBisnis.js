import bisnis from '../../data/bisnis.json';
<<<<<<< Updated upstream
import UrlParser from '../../routes/url-parser';
=======
>>>>>>> Stashed changes

const DetailBisnis = {
    async render() {
      return ` 
        <section id="details">
            
        </section>
        `;
      },
    
      async afterRender() {
<<<<<<< Updated upstream
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const { id } = url;
        const bisnisElement = document.querySelector('#details');
        const detailBisnis = () => {
          bisnisElement.innerHTML += 
            ` <article class="module-item">
                  <div class="container" >
                    <h2>${bisnis.bisnis[id-1].title}</h2>
                    <img src="${bisnis.bisnis[id-1].pictureId}">
                    <div class="description">
                      <p>${bisnis.bisnis[id-1].description}</p>
                    </div>
                    <div class="specification"><br>
                      ${bisnis.bisnis[id-1].specific.join('<br>')}
                    </div>
                  </div>
        </article>`
        };
        detailBisnis();
        },
=======
        const bisnisId = document.querySelector('#details');
        bisnis.bisnis.forEach((bisnis)=>
        bisnisId.innerHTML = ` 
          <article class="module-item">
            <div class="module-item-picture">
                <img src="${bisnis.pictureId}" alt="Picture">
            </div>
            <div class="container">
            <h2 class="title"><a href="#">${bisnis.title}</a></h2>
            <p class="headline">${bisnis.description}</p>
            </div>
         </article>`
)        },
      
>>>>>>> Stashed changes

      };
      


export default DetailBisnis;