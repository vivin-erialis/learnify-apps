import '../../data/dashboard.json';

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

export { DashboardListItem } ;