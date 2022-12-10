/* eslint-disable import/no-extraneous-dependencies */
import pertanian from '../../data/pertanian.json';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

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
                <img class="lazyload" data-src="${tani.pictureId}" alt="Picture">
            </div>
            <div class="container">
            <h2 class="title"><a href="#/pertanian/${tani.id}">${tani.title}</a></h2>
            <p class="headline">${tani.headline}</p>
            </div>
        </article>`;
    });
  },
};

export default Pertanian;
