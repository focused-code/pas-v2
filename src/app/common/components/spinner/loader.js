import { Loading } from './index';
import './style.scss';

export const Loader = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <section className="loader">
      <div className="loader-child">
        <Loading />
        {(props.message) ? <span style={{ color: 'white' }}>{props.message}</span> : null}
      </div>
    </section>
  );
};
