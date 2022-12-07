import bisnis from '../../data/bisnis.json';

const Bisnis = {
    async render() {
            return ` 
        <section class="content-section">
            <img class="picture-page" src="../images/bisnis.jpg">
            <h1 class="dash-tagline">BISNIS</h1><hr>
            <article id="module" class="module">
            </article>
        </section>
        `;
      },
    
      async afterRender() {
        // const dash = await TheModulSource.ModulDashboard();
        const bisnisId = document.querySelector('#module');
        bisnis.bisnis.forEach((bisnis) => {
          bisnisId.innerHTML += ` 
          <article class="module-item">
            <div class="module-item-picture">
                <img src="${bisnis.pictureId}" alt="Picture">
            </div>
            <div class="container">
            <h2 class="title"><a href="#">${bisnis.title}</a></h2>
            <p class="headline">${bisnis.headline}</p>
            </div>
         </article>`;
        });


      },
}

export default Bisnis;