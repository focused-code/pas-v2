import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { getUpgradeImage } from './utils';
import { withRouter } from '../../helpers';

import { Placeholder } from './placeholder';
import { StyledImage } from './styles';

const upgrade_url = `${process.env.REACT_APP_UPGRADE_URL}`;

const Upgrade = (props) => {
    const { pathname } = useLocation();
    const array = pathname.split('/');
    const image = getUpgradeImage(array[array.length - 1]);
    return (
        <section className="upgrade-section">
            <a href={upgrade_url} target="_blank" rel="noreferrer">
                <StyledImage noLazyLoad customPlaceholder={ref => <Placeholder refProp={ref} />} alt="Upgrade" src={image} placeholderColor="#87bfe8" />
            </a>
        </section>
    );
};

const up = withRouter(Upgrade);

export default memo(up);
