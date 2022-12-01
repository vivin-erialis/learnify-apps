import olahraga from '../../data/olahraga.json';

const Olahraga = {
    async render() {
            return ` <style>
            .module {
                display: grid;
                grid-template-columns: repeat(4,1fr);
                background-color: #6998AB;
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
        </style>
        <section class="content-section">
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
                <img src="${olahraga.pictureId}" alt="Picture">
            </div>
            <div class="container">
            <h2 class="title"><a href="#">${olahraga.title}</a></h2>
            <p class="headline">${olahraga.headline}</p>
            </div>
        </article>`;
        });


      },
}

export default Olahraga;