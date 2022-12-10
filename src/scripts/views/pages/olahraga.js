/* eslint-disable import/no-extraneous-dependencies */
import olahraga from '../../data/olahraga.json';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Olahraga = {
  async render() {
    return ` 
        <section class="content-section">
        <img class="picture-page" src="../images/olahraga.jpg">
        <h1 class="dash-tagline">OLAHRAGA</h1><hr>
        <article id="module" class="module">
        </article>
        </section>
            `;
  },

  async afterRender() {
    // const dash = await TheModulSource.ModulDashboard();
    const olahragaId = document.querySelector('#module');
    olahraga.olahraga.forEach((olahraga) => {
      olahragaId.innerHTML += ` <article class="module-item">
            <div class="module-item-picture">
                <img class="lazyload" data-src="${olahraga.pictureId}" alt="Picture">
            </div>
            <div class="container">
            <h2 class="title"><a href="#/olahraga/${olahraga.id}">${olahraga.title}</a></h2>
            <p class="headline">${olahraga.headline}</p>
            </div>
        </article>`;
    });
  },
};

export default Olahraga;
