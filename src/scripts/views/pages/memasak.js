/* eslint-disable import/no-extraneous-dependencies */
import memasak from '../../data/memasak.json';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Memasak = {
  async render() {
    return ` 
            <section class="content-section">
                <img class="picture-page" src="../images/memasak.jpg">
                <h1 class="dash-tagline">MEMASAK</h1><hr>
                <article id="module" class="module">
                </article>
            </section>
            `;
  },

  async afterRender() {
    // const dash = await TheModulSource.ModulDashboard();
    const memasakId = document.querySelector('#module');
    memasak.memasak.forEach((memasak) => {
      memasakId.innerHTML += ` <article class="module-item">
            <div class="module-item-picture">
                <img class="lazyload" data-src="${memasak.pictureId}" alt="Picture">
            </div>
            <div class="container">
            <h2 class="title"><a href="#/memasak/${memasak.id}">${memasak.title}</a></h2>
            <p class="headline">${memasak.headline}</p>
            </div>
        </article>`;
    });
  },
};

export default Memasak;
