import bisnis from '../../data/bisnis.json';

const DetailBisnis = {
    async render() {
      return ` 
        <section id="details">
            
        </section>
        `;
      },
    
      async afterRender() {
        // const dash = await TheModulSource.ModulDashboard();
        const bisnisId = document.querySelector('#details');
        bisnisId.innerHTML += ` 
          <article class="module-item">
            <div class="module-item-picture">
                <img src="${bisnis.pictureId}" alt="Picture">
            </div>
            <div class="container">
            <h2 class="title"><a href="#">${bisnis.title}</a></h2>
            <p class="headline">${bisnis.description}</p>
            </div>
         </article>`;
        },


      };

export default DetailBisnis;