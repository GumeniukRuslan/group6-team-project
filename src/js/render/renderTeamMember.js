import svgPath from '../../images/icons.svg';
import sample from '../../images/icon-programmer.png'

export const renderTeamMember = (data) => {
    const members = data.map(({name, photo, position, links: [github, linkedin]}) => {
        return `<li class="team__member">
        <div class="team__thumb">
            <img src="${photo ? photo : sample}" alt="" class="team__img" width="100">
            <div class="team__layout">
                <a href="${github.url}" class="team__link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20">
                        <use href="${svgPath}#icon-github">
                    </svg>
                </a>
                <a href="${linkedin.url}" class="team__link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20">
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