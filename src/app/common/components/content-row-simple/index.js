import { memo, useState, useContext, useEffect, Fragment } from "react";

import {
    RowContainer,
    CheckBox,
    StepBox,
    Column,
    CProgress,
    Button,
    UnstyledList,
    StepBadge,
    StepHeader
} from '../../common/styles';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm'
import Loader from "../loader";
import loadable from '@loadable/component';
import { VideoAnalysisContext, OnboardingContext, LeadGenerationContext } from '../../state';
import { GetFile, ExtractScript } from "../../common/helpers";
import { useLeadGenerationData } from "../../containers/lead-generation/data";
import { getToken, getUser } from "../general/utils";
import { Spinner } from "reactstrap";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";

const CModal = loadable(() => import(/* webpackChunkName: "cmodal", webpackPrefetch: true */ '../modal'), {
    fallback: <Loader />,
});

const ContentRowSimple = inject('properties')(observer((props) => {


    const { properties, content, videoprogress, step, active, tab, page, step_data,user } = props;
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState(false)
    const [stepNumber, setStepNumber] = useState(false)

    if (!content) {
        return null;
    }

    const { progress, saveProgress,saveUserScript } = useLeadGenerationData();
    const isVideo = (content.type === "watch-multiple-video") || (content.type === "watch-multiple-video-accordion") || (content.type === "watch-single-video");

    const isAdvisorTask = (content.type === 'advisor-task');


    const { advisor, loadedanalytics, setSelectedStep, setShowVideos, setShowSurvey, scripts,userScripts } = useContext(LeadGenerationContext);

    const user_id = properties.user.id;

    useEffect(() => {
        setId(content[0].id)
        setStepNumber(content[0].step)
        checkIfDone()
    }, [content, step_data]);

    const checkIfDone = () => {
        if (step_data == 1) {
            setChecked(true)
            return true
        }

    };

    const isChecked = (progress && step_data) ? checkIfDone() : false;

    const toggleCompletion = (e) => {

        const params = {
            user_id: user_id,
            step: `step_${stepNumber}`,
            page: page.replace('-mastery', '').replace('-', '_'),
            tab: tab.replace('-event', '').replace('-the', '').replace('-', '_'),
        };

        if (saveProgress(params, { setLoading })) {
            setChecked(!checked)
        }

    };

    const getColumnSize = (size) => {
        switch (size) {
            case 'large':
            default:
                return ('col-12');
            case 'medium':
                return ('col-8');
            case 'small':
                return ('col-4');
        }
    }

    const getActive = () => {
        if (active || isChecked || checked) {
            return 'active';
        }
        return ''
    }

    const renderLinks = (links) => {
        if (links) {
            return links.map((link, index) => {   
                const [open, setOpen] = useState(false);
                const toggle = () => setOpen(!open);
                if(link.article){
                    const name = link.article.replace('.md','')
                    let file_name = GetFile(scripts, name);
                    const customScript = userScripts && ExtractScript(userScripts,name)
    
                    let payload = (customScript)? { custom: customScript }: {src:file_name};
    
                    return (
                        <li key={index}>
                            <a href="#" onClick={toggle} id={(link.title) ? link.title.replaceAll(' ','_'): undefined}>{link.title}</a>
                            <CModal title={link.title} toggle={toggle} open={open} markdown={true}  scrollable={true} src={file_name} saveUserScript={saveUserScript} user_id={user_id} script_name={name} {...payload}/>
                        </li>
                    )
                }

                if(link.url){
                    return (
                        <li key={index}>
                            <a target="_blank" href={link.url} onClick={toggle} id={(link.title) ? link.title : undefined}>{link.title}</a>
                        </li>
                    )
                }
                
            })
        }
    }

    const renderAdvanced = advanced => {
        if (advanced) {
            const [open, setOpen] = useState(false);
            const toggle = () => setOpen(!open);
            const name = advanced.replace('.md','')
            const file_name = GetFile(scripts, advanced);

            const customScript = userScripts && ExtractScript(userScripts,name)
            let payload = (customScript)? { custom: customScript }: {src:file_name};

            return (
                <>
                    <div className={`text-center`}>
                        <Button className="btn-green w-75 p-2" onClick={toggle} id={(file_name)?file_name:undefined} margin={`auto`}>Advanced</Button>
                    </div>
                    <CModal title={'Advanced'} toggle={toggle} open={open} markdown={true} script={true} scrollable={true} src={file_name} saveUserScript={saveUserScript} user_id={user_id} script_name={name} {...payload}/>
                </>
            )
        }
    }

    return (
        <RowContainer className={`py-4 row m-0 w-100`}>
            <StepBadge className={getActive()}>{step}</StepBadge>
            {content.map(c => (

                <Column isChecked={isChecked} key={c.uuid} id={c.uuid} className={`mx-2 ${getColumnSize(c.size)} p-0 ${getActive()}`}>
                    <StepHeader className={`p-2 mb-0 ${getActive()}`}>{c.title}</StepHeader>
                    {!c.links &&  c.links === "" && c.description !=='' &&
                        <div className={'d-flex align-items-start p-2 bordered'}>
                            <CheckBox>{loading ? <Spinner size="sm" type="border" color="info" /> : <input checked={checked} onChange={toggleCompletion} type="checkbox" disabled={isAdvisorTask || checked} />}</CheckBox>
                            <StepBox>
                                <ReactMarkdown children={c.description} rehypePlugins={[rehypeRaw]} className={'d-block'} remarkPlugins={[remarkGfm]}/>
                            </StepBox>
                        </div>
                    }
                    { c.links && c.links !== "" &&
                    <>
                    <UnstyledList className="p-2 bordered">
                        {c.links && renderLinks(c.links)} 
                    </UnstyledList>
                    {c.advanced && renderAdvanced(c.advanced)}
                    </>
                        
                    }
                </Column>
            ))}
        </RowContainer>
    );
}));



export default memo(ContentRowSimple)