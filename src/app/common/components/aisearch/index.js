
import { useContext, memo } from 'react';
import loadable from '@loadable/component';
import { Spinner } from 'reactstrap';
import { AIContext } from '../../state';
import { Container, SubContainer, Main, Header, BatchHeader, BatchContent, Content, Batch, Heading, TopLabel, MainSection, MainBox } from './styles';
import { useDB } from './data';

const AsynForm = loadable(() => import(/* webpackChunkName: "ai-search-form", webpackPrefetch: true */ './form'), {
    fallback: <Spinner />,
});

export const AI = (props) => {

    const { searchAi } = useDB();

    const { setShowAi } = useContext(AIContext);

    return (
        <Container className="animate__animated animate__fadeIn">
            <SubContainer>
                <Main>
                    <Header>
                        <Heading>Search AI</Heading>
                        <span><span onClick={() => setShowAi(false)} className="closer"><i className="fa fa-times" /></span></span>
                    </Header>
                    <MainSection>
                        <MainBox>
                            <Content>
                                <Batch>
                                    <BatchHeader>
                                        <h3>Search Live AI</h3>
                                    </BatchHeader>
                                    <BatchContent>
                                        <AsynForm {...props} searchAi={searchAi} />
                                    </BatchContent>
                                </Batch>
                            </Content>
                        </MainBox>
                    </MainSection>
                </Main>
            </SubContainer>
        </Container>
    )
};

export default memo(AI);