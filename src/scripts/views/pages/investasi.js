import investasi from '../../data/investasi.json';

const Investasi = {
    async render() {
        return ` 
            <section class="content-section">
                <img class="picture-page" src="../images/investasi.jpg">
                <h1 class="dash-tagline">INVESTASI</h1><hr>
                <article id="module" class="module">
                </article>
            </section>
            `;
      },
    
      async afterRender() {
        // const dash = await TheModulSource.ModulDashboard();
        const investasiId = document.querySelector('#module');
        investasi.investasi.forEach((investasi) => {
          investasiId.innerHTML += ` <article class="module-item">
            <div class="module-item-picture">
                <img src="${investasi.pictureId}" alt="Picture">
            </div>
            <div class="container">
            <h2 class="title"><a href="#">${investasi.title}</a></h2>
            <p class="headline">${investasi.headline}</p>
            </div>
        </article>`;
        });


      },
}

export default Investasi;