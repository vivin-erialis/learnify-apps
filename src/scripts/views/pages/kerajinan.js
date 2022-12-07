import kerajinan from '../../data/kerajinan.json';

const Kerajinan = {
    async render() {
<<<<<<< Updated upstream
            return ` 
=======
            return ` <style>
            .module {
                display: grid;
                grid-template-columns: repeat(3,1fr);
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
>>>>>>> Stashed changes
        <section class="content-section">
        <img class="picture-page" src="../images/kerajinan.jpg">
        <h1 class="dash-tagline">KERAJINAN</h1><hr>
        <article id="module" class="module">
        </article>
        </section>
            `;
      },
    
      async afterRender() {
        // const dash = await TheModulSource.ModulDashboard();
        const kerajinanId = document.querySelector('#module');
        kerajinan.kerajinan.forEach((kerajinan) => {
          kerajinanId.innerHTML += ` <article class="module-item">
            <div class="module-item-picture">
                <img src="${kerajinan.pictureId}" alt="Picture">
            </div>
            <div class="container">
            <h2 class="title"><a href="#">${kerajinan.title}</a></h2>
            <p class="headline">${kerajinan.headline}</p>
            </div>
        </article>`;
        });


      },
}

export default Kerajinan;