import { memo, useContext } from 'react';
import loadable from '@loadable/component';
import Tabs, { TabPane } from 'rc-tabs';
import { AIContext } from '../../../state';
import { Spinner } from 'reactstrap';

import 'rc-tabs/assets/index.css';
import './styles.scss';

const AsynContent = loadable(() => import(/* webpackChunkName: "ai-suggestions-content", webpackPrefetch: true */ '../local-content'), {
  fallback: <Spinner />,
});

const MainTabs = ({ business, getResponses, userid, assessment_id }) => {

  const { params } = useContext(AIContext);

  const { alias } = params;

  const getStatus = (type) => {
    if (!alias) {
      return false;
    } else {
      return alias !== type;
    }
  }

  return (
    <Tabs defaultActiveKey={(alias && alias.length) ? alias : "costs-cogs"}>
      <TabPane tab="Costs of Goods Sold" key="costs-cogs" disabled={getStatus('costs-cogs')}>
        <AsynContent assessment_id={assessment_id} userid={userid} alias="cogs" business={business} getResponses={getResponses} />
      </TabPane>

      <TabPane tab="Overhead Costs" key="costs-overhead" disabled={getStatus('costs-overhead')}>
        <AsynContent assessment_id={assessment_id} userid={userid} alias="overhead" business={business} getResponses={getResponses} />
      </TabPane>
    </Tabs>
  );
};

export default memo(MainTabs);