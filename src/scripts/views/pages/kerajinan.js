import kerajinan from '../../data/kerajinan.json';

const Kerajinan = {
    async render() {
        return ` 
        <section class="content-section">
            <img class="picture-page" src="../images/kerajinan.jpg">
            <h1 class="dash-tagline">KERAJINAN</h1><hr>
            <article id="module" class="module">
            </article>
        </section>
            `;
      },
    
      async afterRender() {
        // const dash = await TheModulSource.ModulDashboard();
        const kerajinanId = document.querySelector('#module');
        kerajinan.kerajinan.forEach((kerajinan) => {
          kerajinanId.innerHTML += ` <article class="module-item">
            <div class="module-item-picture">
                <img src="${kerajinan.pictureId}" alt="Picture">
            </div>
            <div class="container">
            <h2 class="title"><a href="#/kerajinan/${kerajinan.id}">${kerajinan.title}</a></h2>
            <p class="headline">${kerajinan.headline}</p>
            </div>
        </article>`;
        });


      },
}

export default Kerajinan;