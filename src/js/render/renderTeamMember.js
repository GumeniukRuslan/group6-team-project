import svgPath from '../../images/icons.svg';

export const renderTeamMember = (data) => {
    console.log(typeof data)
    const members = data.map(({name, photo, position, links: [github, linkedin]}) => {
        return `<li class="team__member">
        <div class="team__thumb">
            <img src="${photo}" alt="" class="team__img">
            <div class="team__layout">
                <a href="${github.url}" class="team__link">
                    <svg>
                        <use href="${svgPath}#icon-github">
                    </svg>
                </a>
                <a href="${linkedin.url}" class="team__link">
                    <svg>
                    <use href="${svgPath}#icon-linkedin">
                    </svg>
                </a>
            </div>
        </div>
        <h2 class="team__name">${name}</h2>
        <p class="team__position">${position}</p>
    </li>`
    }).join("");
    return members;
}