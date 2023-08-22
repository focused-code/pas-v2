import { observer } from 'mobx-react';
import { useContext } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { upgradeAccount } from '../general/utils';
import { withRouter } from '../../helpers';
import { NotificationsContext } from '../../state';
import { CollapseButton } from './styles';



const TMenu = observer((props) => {
  const { pathname } = useLocation();

  const { menucollapse, setMenucollapse } = useContext(NotificationsContext);
  const toggle = () => setMenucollapse(!menucollapse);

  const liActive = (path) => {
    const array = pathname.split('/');

    if (path === 'dashboard' || path === 'meeting') {
      const string = array[array.length - 1];
      const found = (path === string);
      return (found) ? 'active' : '';
    }

    const string = array[3];
    const found = (path === string);
    return (found) ? 'active' : '';

  };

  const { coach, router } = props;

  const { params } = router;

  const full_name = (coach) ? `${coach.first_name} ${coach.last_name} Coaching` : null;

  const company = (coach && coach.company) ? coach.company : full_name;

  const styles = {
    links: {
      color: (upgradeAccount()) ? 'rgba(0,0,0,0.4)' : '#ffffff',
    },
  };

  return (
    <section className="top-menu animate__animated animate__fadeIn">
      <CollapseButton className={liActive('')} onClick={toggle} > <i className="fa fa-bars" aria-hidden="true"></i> </CollapseButton>
      <ul className="menu">
        <li className={liActive('dashboard')}><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li className={liActive('priorities')}><NavLink to={`/assessment/${params.id}/priorities`}>Priorities</NavLink></li>
        <li className={liActive('implementation')}><NavLink to={`/assessment/${params.id}/implementation`}>Implementation</NavLink></li>
        {(upgradeAccount()) ? <li className={liActive('roi')}><NavLink to={`/assessment/${params.id}/roi`}>ROI</NavLink></li> : null}
        <li className={liActive('reports')}><NavLink style={styles.links} to={`/assessment/${params.id}/reports`}>Reports</NavLink></li>
        {(upgradeAccount()) ? null : <li className={liActive('roi')}><NavLink to={`/assessment/${params.id}/roi`}>ROI</NavLink></li>}
        <li className={liActive('agreements')}><NavLink style={styles.links} to={`/assessment/${params.id}/agreements`}>Agreements</NavLink></li>
        <li className={liActive('guides')}><NavLink style={styles.links} to={`/assessment/${params.id}/guides`}>Strategies</NavLink></li>
        <li className={liActive('coachingportal')}><NavLink style={styles.links} to={`/dashboard/coachingportal`}>Coaching Portal</NavLink></li>
      </ul>
      <div className="coaching">{company}</div>
    </section>
  );
});

export const TopMenu = withRouter(TMenu);
