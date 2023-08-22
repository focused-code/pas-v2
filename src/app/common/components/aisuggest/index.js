
import { useContext, useEffect, memo, useState } from 'react';
import loadable from '@loadable/component';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Spinner } from 'reactstrap';
import { AIContext } from '../../state';
import { Container, SubContainer, Main, Header, BatchHeader, BatchContent, Content, Batch, Heading, MainSection, MainBox } from './styles';
import { useDB } from './data';

const AsynContent = loadable(() => import(/* webpackChunkName: "ai-suggestions-content", webpackPrefetch: true */ './content'), {
    fallback: <Spinner />,
});

const AsynForm = loadable(() => import(/* webpackChunkName: "ai-update-business-type", webpackPrefetch: true */ './update-form'), {
    fallback: <Spinner />,
});

const AsynTabs = loadable(() => import(/* webpackChunkName: "ai-suggest-tabs", webpackPrefetch: true */ './tabs'), {
    fallback: <Spinner />,
});

export const AISuggestions = inject('properties')(observer((props) => {

    const { properties } = props;

    const assessment = toJS(properties.selected_assessment);

    const user = toJS(properties.user);

    const [showform, setShowForm] = useState(false);

    const { updateBusinessType } = useDB();

    const { setShowSuggestions, params, showhistory, setShowHistory } = useContext(AIContext);

    if (!params) {
        return null;
    }

    const { module, path } = params;

    useEffect(() => {
        if (!assessment?.business_type || ((assessment?.business_type) && (assessment?.business_type?.length == 0))) {
            setShowForm(true);
        }
    }, [assessment]);

    const close = () => {
        setShowForm(false);
    };

    return (
        <Container className="animate__animated animate__fadeIn">
            <SubContainer>
                <Main>
                    <Header>
                        <Heading>AI Suggestions</Heading>
                        <span>
                            <span onClick={() => setShowSuggestions(false)} className="closer"><i className="fa fa-times" /></span>
                        </span>
                    </Header>
                    <MainSection>
                        {showform ? (
                            <MainBox>
                                <Content>
                                    <Batch>
                                        <BatchHeader>
                                            <h3>Please Update {assessment?.company_name} Business Type</h3>
                                        </BatchHeader>
                                        <BatchContent>
                                            <AsynForm id={assessment?.company_id} close={close} update={updateBusinessType} />
                                        </BatchContent>
                                    </Batch>
                                </Content>
                            </MainBox>
                        ) : (
                            <MainBox>
                                <Content>
                                    <Batch>
                                        <BatchHeader>
                                                <h3>{module} - {assessment?.business_type} <span onClick={() => setShowForm(true)}><i className="fa fa-pencil" /> Edit</span></h3>
                                                {showhistory ? <button onClick={() => setShowHistory(false)}><i className="fa fa-eye-slash" /> Hide History</button> : <button onClick={() => setShowHistory(true)}><i className="fa fa-eye" /> Show History</button>}
                                        </BatchHeader>
                                        <BatchContent>
                                                {path == 'costs' ? (
                                                    <AsynTabs userid={user?.id} assessment_id={assessment?.id} business={assessment?.business_type} />
                                                ) : <AsynContent userid={user?.id} assessment_id={assessment?.id} module_set_name={assessment?.module_set_name} business={assessment?.business_type} />}
                                        </BatchContent>
                                    </Batch>
                                </Content>
                            </MainBox>
                        )}

                    </MainSection>
                </Main>
            </SubContainer>
        </Container>
    )
}));

export default memo(AISuggestions);