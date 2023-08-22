import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from '../../helpers';
import { CollapseButton } from './styles';
import { NotificationsContext } from '../../state';

const DMenu = observer((props) => {
  const { pathname } = useLocation();

  const { menucollapse, setMenucollapse } = useContext(NotificationsContext);

  const toggle = () => setMenucollapse(!menucollapse);

  const liActive = (path) => {
    const array = pathname.split('/');
    const string = array[array.length - 1];

    const found = (path === string);

    return (found) ? 'active' : '';
  };

  const { coach } = props;

  const full_name = (coach) ? `${coach.first_name} ${coach.last_name} Coaching` : null;

  const company = (coach && coach.company) ? coach.company : full_name;

  return (
    <section className="top-menu animate__animated animate__fadeIn">
      <CollapseButton className="active" onClick={toggle} > <i className="fa fa-bars" aria-hidden="true"></i> </CollapseButton>
      <ul className="menu">
        <li className={liActive('dashboard')}><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li className={liActive('contact')}><NavLink to="/dashboard/contact">New Contact</NavLink></li>
        <li className={liActive('assessment')}><NavLink to="/dashboard/assessment">New Assessment</NavLink></li>
        <li className={liActive('analysis')}><NavLink to="/dashboard/analysis">Results Analysis</NavLink></li>
      </ul>
      <div className="coaching">{company}</div>
    </section>
  );
});

export const DashboardMenu = withRouter(DMenu);
