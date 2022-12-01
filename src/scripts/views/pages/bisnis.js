import TheModulSource from "../../data/themodul-source";
import { DashboardListItem } from "../templates/template-creator";
import bisnis from '../../data/bisnis.json';

const Bisnis = {
    async render() {
            return ` 
            <style>
            .module {
                display: grid;
                grid-template-columns: repeat(4,1fr);
                
            }
            .module-item {
                background-color: #B1D0E0;
                margin: 20px;
                box-shadow: 0 2px 4px 0 #1A374D;
                border-radius: 10px;
            }
            .title a{
                color: black;
                text-decoration: none;
                color: #1A374D;
                font-size: 20px;
            } 
            .container {
                padding: 10px;
            }
            .module-item-picture img {
                width: 100%;
                border-radius: 10px 10px 0px 0px;
            }
            .headline {
                margin-top: 20px;
                font-size: 13px;
            }

            @media screen and (min-width: 500px) {
                .module-item {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }
                
            }

             @media screen and (min-width: 1200px) {
                .module-item {
                    display: grid;
                    grid-template-columns: 1fr;
                }
            }
        </style>
        <section class="content-section">
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
          bisnisId.innerHTML += ` <article class="module-item">
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