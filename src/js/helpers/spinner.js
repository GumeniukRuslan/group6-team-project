import { Loading } from "notiflix";

const startLoading = () => {
    Loading.pulse({
        svgColor: '#4F2EE8'
    })
}

const removeLoading = () => {
    Loading.remove();
}

export {startLoading, removeLoading}