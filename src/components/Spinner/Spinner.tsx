import s from './spinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={s.container}>
      <div className={s.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
