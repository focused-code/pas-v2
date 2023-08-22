import { Fragment, useState, useContext, useEffect } from 'react';
import { toJS } from 'mobx';
import loadable from '@loadable/component';
import { Badge, Collapse } from 'reactstrap';
import { observer, inject } from 'mobx-react';
import { NavLink, useLocation } from 'react-router-dom';
import { each, groupBy, includes } from 'lodash';
import PropTypes from 'prop-types';
import { Loading } from '../spinner';
import { Navigation } from './navigation';
import { FreeProfitMenu } from './freeprofit';
import { FreeDeepMenu } from './freedeep';
import { EmailsContext, NotificationsContext, OnboardingContext } from '../../state';
import { getID, getModuleSetStyle } from '../general/utils';
import { getAlias } from '../general/helpers';
import { withRouter } from '../../helpers';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const LMenu = inject('properties')(observer((props) => {
  const { properties, coach } = props;
  const location = useLocation();
  const pathname = getID(location.pathname, null);
  const assessment = toJS(properties.selected_assessment);

  const [long, setLong] = useState(false);
  const [open, setOpen] = useState(null);
  const [tabActive, setTabActive] = useState("1");

  if (!coach) {
    return null;
  }

  const { unread } = useContext(EmailsContext);
  const { menucollapse } = useContext(NotificationsContext);
  const { setDefaultTab, defaultTab, setonboardingInstructions } = useContext(OnboardingContext);

  useEffect(() => {
    setTabActive(defaultTab);
  }, [defaultTab]);

  const setTab = (tabID) => {
    setDefaultTab(tabID);
  };

  const { trainings, onboarding } = coach;

  const liActive = (path) => {
    const style = (assessment && assessment.module_set_name) ? getModuleSetStyle(assessment.module_set_name) : 'jumpstart';
    const array = location.pathname.split('/');
    const string = array[array.length - 1];
    const found = (path === string);
    const links = ['help', 'profile', 'training', 'onboarding', 'coachingportal', 'tasks', 'events', 'dashboard', 'resources', 'new-resources', 'prospects', 'onboarding-analysis-read', `licensee-onboarding/${defaultTab}`, 'lead-generation'];
    if ((path === 'settings') && (array[array.length - 2] === path)) {
      return 'active';
    }
    if ((path === 'onboarding-analysis-read') && found) {
      setDefaultTab('0');
    }

    if (includes(links, path)) {
      return (found) ? 'active' : '';

    }
    return (found) ? `active ${style}` : '';
  };

  const toggleLongMenu = () => {
    setLong(!long);
  };

  const done = (path) => {
    const status = toJS(properties[path].complete);
    return (status) ? <i className="fa fa-check" /> : null;
  };

  const getNavs = () => {
    const navs = [];
    each(props.modules, (module) => {
      const { module_meta, module_path } = module;
      const path = module_path.trim();

      if (module_meta) {
        const { module_category } = module_meta;

        const current = (pathname === path);

        const obj = {
          id: module.id,
          category: module_category,
          alias: module.module_alias,
          path,
          style: liActive(path),
          current,
          module,
        };

        navs.push(obj);
      }
    });
    return groupBy(navs, each => each.category);
  };

  const renderModulesLinks = () => {
    if (!props.modules) {
      return <Loading />;
    }

    if (assessment) {
      const { module_set_name } = assessment;
      if ((module_set_name === 'Jumpstart40') || (module_set_name === 'Breakthrough40') || (module_set_name === 'FullDigitalAssessment')) {
        const navs = getNavs();
        const titles = Object.keys(navs);
        const alias = getAlias(pathname);
        return <Navigation modulename={module_set_name} toggle={toggleLongMenu} done={done} active={liActive} alias={alias} pathname={pathname} titles={titles} navs={navs} {...props} />;
      }
    }
    return (
      <Fragment>
        <li className={liActive('summary')}><NavLink to={`/assessment/${props.router.params.id}/summary`}>Summary</NavLink></li>
        {
          props.modules.map((module) => {
            const path = module.module_path.trim();
            const sty = liActive(path);
            const current = (pathname === path);

            return (
              <li key={module.id} className={sty}>
                {(current) ? module.module_alias : <NavLink state={{ module }} to={`/assessment/${props.router.params.id}/${path}`}>{module.module_alias}</NavLink>}
                {done(path)}
              </li>
            );
          })
        }
        <FreeProfitMenu assessment={assessment} />
      </Fragment>
    );
  };

  const selectThis = (selected) => {
    if (selected === open) {
      setOpen(null);
    } else {
      setOpen(selected);
    }
  };

  const renderInactiveGroupCoaching = () => (
    <li>
      <a target="_blank" href="https://focused.com/group-coaching-software/"><span className="active" onClick={() => selectThis('Coaching')}>Group Coaching</span> <i className="fa fa-chevron-right active" /></a>
    </li>
  );

  const renderGroupCoaching = () => (
    <li>
      <span onClick={() => selectThis('Coaching')}>Group Coaching</span> {renderArrow('Coaching')}
      {(open && open === 'Coaching') ? (
        <ul className="animate__animated animate__fadeIn">
          <li>
            <NavLink to="/dashboard/coaching/groups" className={liActive('groups')}>Groups</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/coaching/integrations">Apps & Integrations</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/coaching/messages/list" className={liActive('messages')}>Messages</NavLink> {(unread > 0) ? <Badge color="info">{unread}</Badge> : null}
          </li>
          <li>
            <NavLink to="/dashboard/coaching/gctraining">Training</NavLink>
          </li>
        </ul>
      ) : null}
    </li>
  );

  const renderOnboarding = () => (
    <li>
      <span onClick={() => selectThis('Onboarding')}>Onboarding Portal</span> {renderArrow('Onboarding')}
      {(open && open === 'Onboarding') ? (
        <ul className="animate__animated animate__fadeIn">
          <li>
            <NavLink to="/dashboard/onboarding/pas">PAS Training</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/onboarding/business">Website Setup</NavLink>
          </li>
        </ul>
      ) : null}
    </li>
  );

  const renderLeadGeneration = () => (
    <li>
      <span onClick={() => selectThis('lead-generation')}>Lead Generation</span> {renderArrow('lead-generation')}
      {(open && open === 'lead-generation') ? (
        <ul className="animate__animated animate__fadeIn">
          <li className={liActive('lead-generation')}>
            <NavLink to="/dashboard/lead-generation/overview">Overview</NavLink>
          </li>
          <li className={liActive('lead-generation')}>
            <NavLink to="/dashboard/lead-generation/networking">Networking</NavLink>
          </li>
          <li className={liActive('lead-generation')}>
            <NavLink to="/dashboard/lead-generation/live-event-mastery">Live Event Mastery</NavLink>
          </li>
          <li className={liActive('lead-generation')}>
            <NavLink to="/dashboard/lead-generation/joint-ventures">Joint Ventures</NavLink>
          </li>
          <li className={liActive('lead-generation')}>
            <NavLink to="/dashboard/lead-generation/lists">Lists</NavLink>
          </li>
          {/* <li className={liActive('lead-generation')}>
            <NavLink to="/dashboard/training/leadgeneration">Training</NavLink>
          </li> */}
        </ul>
      ) : null}
    </li>
  );

  const renderLicenseeOnboarding = () => {
    if (props.isLicensee && coach.trainings.licensee_onboarding === 1 || props.isAdmin && coach.trainings.licensee_onboarding === 1) {
      return (
        <li>
          <span onClick={() => selectThis('licensees')}>Licensee Portal</span> {renderArrow('licensees')}
          {(open && open === 'licensees') ? (
            <ul className="animate__animated animate__fadeIn">
              <li className={tabActive === "1" ? 'active' : ''} onClick={e => setTab('1')}>
                <NavLink to="/dashboard/onboarding/licensee-onboarding/1">Get Started</NavLink>
              </li>
              <li className={tabActive === "2" ? 'active' : ''} onClick={e => setTab('2')}>
                <NavLink to="/dashboard/onboarding/licensee-onboarding/2">Build Your Team</NavLink>
              </li>
              <li className={tabActive === "3" ? 'active' : ''} onClick={e => setTab('3')}>
                <NavLink to="/dashboard/onboarding/licensee-onboarding/3">Support Your Team</NavLink>
              </li>

              <li className={tabActive === "4" ? 'active' : ''} onClick={e => setTab('4')}>
                <NavLink to="/dashboard/onboarding/licensee-onboarding/4">Additional Resources</NavLink>
              </li>

              <li className={liActive(props.isAdmin ? '/onboarding-analysis' : '/onboarding-analysis-read')}>
                <NavLink to={props.isAdmin ? '/dashboard/settings/onboarding-analysis' : '/dashboard/settings/onboarding-analysis-read'} >My Coaches</NavLink>
              </li>
            </ul>
          ) : null}
        </li>)
    }
  };

  const renderArrow = (title) => ((open && open === title) ? <i className="fa fa-chevron-right direction rotate down" /> : <i className="fa fa-chevron-right direction rotate" />);

  const renderLinks = () => {
    const settings = (props.isAdmin) ? (
      <li className={liActive('settings')}>
        <NavLink to="/dashboard/settings/users">Settings</NavLink>
      </li>
    ) : (props.isAdvisor) ? (
      <li className={liActive('settings')}>
        <NavLink to="/dashboard/settings/onboarding-analysis">Settings</NavLink>
      </li>
    ) : null;

    if (props.dashboard) {
      return (
        <ul>
          <li className={liActive('dashboard')}>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className={liActive('help')}>
            <NavLink to="/dashboard/help">Support</NavLink>
          </li>
          {settings}
          <li className={liActive('profile')}>
            <NavLink to="/dashboard/profile">Profile</NavLink>
          </li>
          {
            (onboarding === 1) ? renderOnboarding() : null
          }
          {renderLicenseeOnboarding()}  {/* Licensee onboarding */}
          <li>
            <span onClick={() => selectThis('coachingportal')}>Coaching Portal</span> {renderArrow('coachingportal')}
            {(open && open === 'coachingportal') ? (
              <ul className="animate__animated animate__fadeIn">
                <li>
                  <NavLink to="/dashboard/coachingportal">Coaching</NavLink>
                </li>
                {(trainings && trainings.flash_coaching === 1) ? (<>
                  <li>
                    <NavLink to="/dashboard/flashcoaching">Flash Coaching</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/flashcoachingtraining">Flash Coaching Training</NavLink>
                  </li>
                  <li>
                    <a href="https://profitaccelerationsoftware.s3.amazonaws.com/training-videos/flash-coaching/Flash_Coaching_Marketing_Materials.zip" tagret="_blank">Flash Coaching Marketing</a>
                  </li>
                </>) : null}
              </ul>
            ) : null}
          </li>
          {(trainings && trainings.lead_generation === 1) ? renderLeadGeneration() : null}
          <li className={liActive('tasks')}>
            <NavLink to="/dashboard/tasks">Tasks</NavLink>
          </li>
          <li className={liActive('training')}>
            <NavLink to="/dashboard/training">Training</NavLink>
          </li>
          <li className={liActive('new-resources')}>
            <NavLink to="/dashboard/new-resources">Resources</NavLink>
          </li>
          <li className={liActive('prospects')}>
            <NavLink to="/dashboard/prospects">Lists</NavLink>
          </li>
          {(trainings && trainings.group_coaching === 1) ? renderGroupCoaching() : renderInactiveGroupCoaching()}
          <li className={liActive('events')}>
            <NavLink to="/dashboard/events">Events</NavLink>
          </li>
          {/* <li className={liActive('grant')}>
            <NavLink to="/dashboard/grant">Grant Program</NavLink>
          </li> */}
        </ul>
      );
    }
    return (
      <>
        <ul>
          {renderModulesLinks()}
        </ul>
        <FreeDeepMenu assessment={assessment} />
      </>
    );
  };

  const checksubpage = () => {

    const string = location.pathname;
    const status = (string.includes('/dashboard/resources'));
    return (status) ? 'main-menu resources-menu animate__animated animate__fadeIn' : 'main-menu animate__animated left-menu-modified animate__fadeIn';
  };

  const style = (long) ? 'long-menu main-menu animate__animated animate__fadeIn' : (props.dashboard) ? checksubpage() : 'main-menu left-menu-modified animate__animated animate__fadeIn';

  return (

    <TransitionGroup component={null} flow="row" appear enter exit>

      <CSSTransition timeout={2000}>
        <Collapse isOpen={menucollapse} className={style} horizontal="true">
          <section className={style}>
            <div className="home-icon"><NavLink to="/dashboard"><i className="fa fa-home" aria-hidden="true" /></NavLink></div>
            {renderLinks()}

          </section>
        </Collapse>
      </CSSTransition>
    </TransitionGroup>


  );
}));

LMenu.propTypes = {
  dashboard: PropTypes.bool,
};

export const LeftMenu = withRouter(LMenu);
