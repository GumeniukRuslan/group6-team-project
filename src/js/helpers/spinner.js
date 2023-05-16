import { Loading } from 'notiflix';

const startLoading = () => {
  Loading.pulse({
    svgColor: '#4F2EE8',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  });
};

const removeLoading = () => {
  Loading.remove();
};

export { startLoading, removeLoading };
