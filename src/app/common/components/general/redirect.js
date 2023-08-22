import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { Navigate } from 'react-router-dom';

const RedirectMe = inject('properties')(observer((props) => {
  const { initial, to, properties } = props;

  if (initial) {
    properties.setInitialURL(initial);
  }

  return <Navigate to={to} />;
}));

export default RedirectMe;

RedirectMe.propTypes = {
  to: PropTypes.string.isRequired,
};
