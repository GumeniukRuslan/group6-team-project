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

const LoaderBackdropStart = () => {
  Loading.pulse({
    svgColor: '#4F2EE8',
    backgroundColor: 'rgba(17, 17, 17, 0.6)',
  });
}

export { startLoading, removeLoading, LoaderBackdropStart };
