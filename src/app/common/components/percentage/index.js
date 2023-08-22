import { Fragment } from 'react';
import { Progress } from 'reactstrap';

export const Percentage = (props) => {
  const { percentage } = props;
  if (percentage === 0) {
    return null;
  }
  const percent = 100;
  return <Fragment><h6>Progress</h6> <Progress color="success" value={percent}>{percent}%</Progress></Fragment>;
};

export default Percentage;
