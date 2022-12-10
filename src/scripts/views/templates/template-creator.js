import dashboard from '../../data/video.json';
import bisnis from '../../data/bisnis.json';

const DashboardListItem = (dashboard) => {
  `<article class="module-item">
        <div class="module-item-picture">
            <div>${dashboard.videoId}<div>
        </div>
        <div class="container">
        <h2 class="title"><a href="#/">${dashboard.videoId}</a></h2>
        </div>
    </article>`;
};

const DetailTemplate = (bisnis) => {
  ` <article class="module-item">
    <div class="module-item-picture">
        <img src="${bisnis.videoId}" alt="Picture">
    </div>
    <div class="container">
    <h2 class="title"><a href="#/detailBisnis/${bisnis.id}">${bisnis.title}</a></h2>
    <p class="headline">${bisnis.headline}</p>
    </div>
 </article>`;
};

export { DashboardListItem, DetailTemplate };
