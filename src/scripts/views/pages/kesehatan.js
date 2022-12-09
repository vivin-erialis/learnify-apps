import kesehatan from '../../data/kesehatan.json';

const Kesehatan = {
    async render() {
        return ` 
        <section class="content-section">
            <img class="picture-page" src="../images/kesehatan.jpg">
            <h1 class="dash-tagline">KESEHATAN</h1><hr>
            <article id="module" class="module">
            </article>
        </section>
            `;
      },
    
      async afterRender() {
        // const dash = await TheModulSource.ModulDashboard();
        const kesehatanId = document.querySelector('#module');
        kesehatan.kesehatan.forEach((kesehatan) => {
          kesehatanId.innerHTML += ` <article class="module-item">
            <div class="module-item-picture">
                <img src="${kesehatan.pictureId}" alt="Picture">
            </div>
            <div class="container">
            <h2 class="title"><a href="#/kesehatan/${kesehatan.id}">${kesehatan.title}</a></h2>
            <p class="headline">${kesehatan.headline}</p>
            </div>
        </article>`;
        });


      },
}

export default Kesehatan;