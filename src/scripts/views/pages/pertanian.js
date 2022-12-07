import pertanian from '../../data/pertanian.json';

const Pertanian = {
    async render() {
            return ` 
        <section class="content-section">
        <img class="picture-page" src="../images/pertanian.jpg">
        <h1 class="dash-tagline">PERTANIAN</h1><hr>
        <article id="module" class="module">
        </article>
        </section>
            `;
      },
    
      async afterRender() {
        // const dash = await TheModulSource.ModulDashboard();
        const pertanianId = document.querySelector('#module');
        pertanian.pertanian.forEach((tani) => {
          pertanianId.innerHTML += ` <article class="module-item">
            <div class="module-item-picture">
                <img src="${tani.pictureId}" alt="Picture">
            </div>
            <div class="container">
            <h2 class="title"><a href="#">${tani.title}</a></h2>
            <p class="headline">${tani.headline}</p>
            </div>
        </article>`;
        });


      },
}

export default Pertanian;