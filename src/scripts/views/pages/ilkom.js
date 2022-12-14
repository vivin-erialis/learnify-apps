/* eslint-disable import/no-extraneous-dependencies */
import ilkom from '../../data/ilkom.json';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Ilkom = {
  async render() {
    return ` 
        <section class="content-section">
            <img class="picture-page" src="../images/ilkom.jpg">
            <h1 class="dash-tagline">ILMU KOMPUTER</h1><hr>
            <article id="module" class="module">
            </article>
        </section>
            `;
  },

  async afterRender() {
    // const dash = await TheModulSource.ModulDashboard();
    const ilkomId = document.querySelector('#module');
    ilkom.ilkom.forEach((ilkom) => {
      ilkomId.innerHTML += ` <article class="module-item">
            <div class="module-item-picture">
                <img class="lazyload" data-src="${ilkom.pictureId}" alt="Picture">
            </div>
            <div class="container">
            <h2 class="title"><a href="#/ilkom/${ilkom.id}">${ilkom.title}</a></h2>
            <p class="headline">${ilkom.headline}</p>
            </div>
        </article>`;
    });
  },
};

export default Ilkom;
