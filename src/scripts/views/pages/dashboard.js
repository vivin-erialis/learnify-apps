import TheModulSource from "../../data/themodul-source";
import { DashboardListItem } from "../templates/template-creator";
import dashboard from '../../data/dashboard.json';

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
            `;
      },
    
      async afterRender() {
        // const dash = await TheModulSource.ModulDashboard();
        const dashId = document.querySelector('#module');
        dashboard.dashboard.forEach((dashboards) => {
          dashId.innerHTML += `<article class="module-item">
                <div class="module-item-picture">
                    <img src="${dashboards.pictureId}" alt="Picture">
                </div>
                <div class="container">
                <h2 class="title"><a href="#">${dashboards.title}</a></h2>
                </div>
            </article>`;
        });


      },
}

export default Dashboard;