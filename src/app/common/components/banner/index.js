import { getModuleSetStyle, getModuleSetName } from '../general/utils';

export const Banner = (props) => {
    const { assessment } = props;

    let style = 'jumpstart';
    let name = 'Profit Jumpstart';

    if (assessment) {
        style = getModuleSetStyle(assessment.module_set_name);
        name = getModuleSetName(assessment.module_set_name);
    }

    const renderBanner = () => (
        <section className={`top-banner ${style}`}>
            <section className="top-banner-left">
                <h3>{name}</h3>
            </section>
            <section className="top-banner-right">
                <h5>497,000,000+ Weighted Algorithmic Sequences</h5>
            </section>
        </section>
    );

    return (
        <section className="main-banner">
            {renderBanner()}
        </section>
    );
};
