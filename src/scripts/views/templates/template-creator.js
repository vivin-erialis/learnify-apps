import dashboard from '../../data/dashboard.json';
import bisnis from '../../data/bisnis.json';

const DashboardListItem = (dashboard) => {
        `<article class="module-item">
        <div class="module-item-picture">
            <img src="${dashboard.pictureId}" alt="Picture">
        </div>
        <div class="container">
        <h2 class="title"><a href="#/">${dashboard.title}</a></h2>
        </div>
    </article>`;
}

const DetailTemplate = (bisnis) =>  {
    ` <article class="module-item">
    <div class="module-item-picture">
        <img src="${bisnis.pictureId}" alt="Picture">
    </div>
    <div class="container">
    <h2 class="title"><a href="#/detailBisnis/${bisnis.id}">${bisnis.title}</a></h2>
    <p class="headline">${bisnis.headline}</p>
    </div>
 </article>`;
}

export { DashboardListItem, DetailTemplate } ;