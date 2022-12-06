import dashboard from '../../data/dashboard.json';
import '../../component/landing-page';
import '../../component/about';

const Dashboard = {
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
                text-decoration: none;
                color: #1A374D;
                font-size: 20px;
            } 
            .title {
                margin-top: -2px;
                text-align: center;
            }
            .container {
                padding: 10px;
            }
            .module-item-picture img {
                width: 100%;
                border-radius: 10px 10px 0px 0px;
                height:200px;
            }
            .headline {
                margin-top: 20px;
                font-size: 13px;
            }

            @media screen and (max-width: 900px) {
                .module {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                }

                .module-item-picture img {
                    width: 100%;
                    height:150px;
                }

                .title a{
                    font-size: 20px;
                }
            } 

            @media screen and (max-width: 700px) {
                .module {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }

                .module-item-picture img {
                    width: 100%;
                    height:150px;
                }

                .title a{
                    font-size: 16px;
                }
                .dash-tagline {
                    font-size: 25px;
                }
            } 

            @media screen and (max-width: 450px) {
                .module {
                    display: grid;
                    grid-template-columns: 1fr;
                }

                .module-item-picture img {
                    width: 100%;
                    height:110px;
                }

                .dash-tagline {
                    font-size: 20px;
                }
            } 

            @media screen and (min-width: 1200px) {
               main {
                min-width:1200px;
               }
            } 
            
        </style>

        <landing-page></landing-page>
        <section class="content-section" id="dashboard">
            <h1 class="dash-tagline">DASHBOARD</h1><hr>
            <article id="module" class="module">
            </article>
        </section>
        <about-page></about-page>
            `;
      },
    
      async afterRender() {
        // const dash = await TheModulSource.ModulDashboard();
        const dashId = document.querySelector('#module');
        dashboard.dashboard.forEach((dashboards) => {
          dashId.innerHTML += `
            <article class="module-item">
                <div class="module-item-picture">
                    <img src="${dashboards.pictureId}" alt="Picture">
                </div>
                <div class="container">
                <h2 class="title"><a href="#">${dashboards.title}</a></h2>
                </div>
            </article>
            `;
        });


      },
}

export default Dashboard;