import { memo } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import light from './light-logo-big.png';
import dark from './dark-logo-big.png';
import das from './das-logo-big.png';

export const Logo = (props) => {
  const register_style = (props.register) ? 'register-logo' : '';
  const url = (props.type === 'light') ? light : (props.das) ? das : dark;
  const style = (props.type === 'light') ? `logo ${register_style}` : (props.register) ? `logo ${register_style}` : 'small-logo';
  return (
    <div className={style}><img alt="Logo" src={url} /></div>
  );
};

Logo.defaultProps = {
  type: 'light',
};

Logo.propTypes = {
  type: PropTypes.string,
};

export default memo(Logo);