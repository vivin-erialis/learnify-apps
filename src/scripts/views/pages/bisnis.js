/* eslint-disable import/no-extraneous-dependencies */
import bisnis from '../../data/bisnis.json';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

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
    const dataBisnis = bisnis;
    const bisnisId = document.querySelector('#module');
    dataBisnis.bisnis.map((bisnis) => {
      bisnisId.innerHTML
            += ` <article class="module-item">
            <div class="module-item-picture">
                <img class="lazyload" data-src="${bisnis.pictureId}" alt="Picture">
            </div>
            <div class="container">
            <h2 class="title"><a href="#/bisnis/${bisnis.id}">${bisnis.title}</a></h2>
            <p class="headline">${bisnis.headline}</p>
            </div>
        </article>`;
    });
  },
};

export default Bisnis;
