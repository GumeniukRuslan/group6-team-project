import { refs } from "./components/refs"
import { team } from "./components/team"
import { renderTeamMember } from "./render/renderTeamMember"

const TeamModalRender = () => {
    refs.teamList.innerHTML = renderTeamMember(team);
}

window.addEventListener("load", renderTeamMember)