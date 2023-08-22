
import { useEffect, useState, useContext, memo } from 'react';
import { groupBy } from 'lodash';
import { Alert } from 'reactstrap';
import moment from 'moment';
import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import './tabs.css';
import { useDB } from './data';
import { NotificationsContext } from '../../state';
import { Container, SubContainer, Main, Header, BatchHeader, BatchContent, Content, Batch, Heading, TopLabel, MainSection, MainBox } from './styles';
import { filterNotifications } from './helpers';
import Loading from './loading';
import { Item } from './item';
export const Notifications = (props) => {

    const [loading, setLoading] = useState(false);

    const { getNotifications, toggleNotificationAnalysis, toggleAll } = useDB();

    const { notifications, analysis, setShow, unreadNotices } = useContext(NotificationsContext);

    useEffect(() => {
        getNotifications({ setLoading });
    }, []);

    const notices = filterNotifications(notifications, 'Notification');
    const announces = filterNotifications(notifications, 'Announcement');

    const notices_grouped = groupBy(notices, each => each.created); // Group by created
    const announces_grouped = groupBy(announces, each => each.created); // Group by created

    const today = moment().format('Do MMM YYYY');

    const renderBatches = (batch, type) => {
        const keys = Object.keys(batch);
        const values = Object.values(batch);
        if (keys.length === 0) {
            return (<Alert color="info">No {type} Found</Alert>);
        }
        return keys.map((e, i) => {
            return (
                <Batch key={e}>
                    <BatchHeader>
                        <h3>{(today === e) ? 'Today' : e}</h3>
                    </BatchHeader>
                    <BatchContent>
                        {values[i].map(e => <Item {...props} toggle={toggleNotificationAnalysis} analysis={analysis} notice={e} key={e.id} />)}
                    </BatchContent>
                </Batch>
            )
        })
    };

    const renderNumber = (type) => {
        if (!analysis || (analysis && analysis.unread_count === 0)) {
            return null;
        } else {
            const unread_notices = filterNotifications(unreadNotices, 'Notification');
            const unread_announces = filterNotifications(unreadNotices, 'Announcement');
            if (type === 'Notification') {
                return (unread_notices.length) ? <span className="notice-number">{unread_notices.length}</span> : null;
            } else {
                return (unread_announces.length) ? <span className="notice-number">{unread_announces.length}</span> : null;
            }
        }
    }

    const markAsRead = () => {
        toggleAll({ user_id: props.user.id }, { setLoading });
    };

    return (
        <Container className="animate__animated animate__fadeIn">
            <SubContainer>
                <Main>
                    <Header>
                        <Heading>Notifications</Heading>
                        {(!loading) ? <span><button onClick={markAsRead} disabled={analysis && analysis.unread_count === 0}><span>Mark all as read</span></button><span onClick={() => setShow(false)} className="closer"><i className="fa fa-times" /></span></span> : null}
                    </Header>
                    <MainSection>
                        <MainBox>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab={<><span>Software Notifications</span>{renderNumber('Notification')}</>} key="1">
                                    <Content>
                                        {(loading) ? <Loading /> : renderBatches(notices_grouped, 'Notifications')}
                                    </Content>
                                </TabPane>

                                <TabPane tab={<><span>Company Announcements</span>{renderNumber('Announcement')}</>} key="2">
                                    <Content>
                                        {(loading) ? <Loading /> : renderBatches(announces_grouped, 'Announcements')}
                                    </Content>
                                </TabPane>
                            </Tabs>
                        </MainBox>
                    </MainSection>
                </Main>
            </SubContainer>
        </Container>
    )
};

export default memo(Notifications);