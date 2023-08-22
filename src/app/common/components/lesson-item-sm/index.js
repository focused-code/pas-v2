import { memo, useEffect } from 'react';
import loadable from '@loadable/component';
import { Loading } from '../loader';
import { LessonItemContainerSM, Summary, Buttons } from './styles';
import { ButtonLink, StyledImage } from '../../common/styles';
import { NavLink } from 'react-router-dom';

const View = loadable(() => import(/* webpackChunkName: "flash-c-view", webpackPrefetch: true */ './view'), {
    fallback: <Loading />,
});

const Placeholder = loadable(() => import(/* webpackChunkName: "flash-c-image-placeholder", webpackPrefetch: true */ './image-placeholder'), {
    fallback: <Loading />,
});


const LessonItemSM = (props) => {
    const { image, id, description, multiple } = props.lesson;

    const { overlay, customStyle } = props;

    const image_url = (image && multiple == false) ? image : (props.lesson.videos) ? props.lesson.videos[0].image : ''

    const { url } = props

    return (

        <LessonItemContainerSM className={(overlay) ? 'overlay-container col-md-3' : '' } style={(customStyle)?customStyle:{}}>
            <NavLink to={`${url}/${id}`}>
                <StyledImage className={(overlay) ? 'overlay-image' : ''} noLazyLoad customPlaceholder={ref => <Placeholder refProp={ref} />} alt="Lesson" src={image_url} placeholderColor="#87bfe8" />
                <Summary className={(overlay) ? 'overlay-description' : ''}>
                    <View text={description} />
                </Summary>
            </NavLink>
                <Buttons className={(overlay) ? 'overlay-button' : ''}>
                    <ButtonLink to={`${url}/${id}`} margin="0" className="btn btn-prime w-100">View Lesson</ButtonLink>
            </Buttons>
        </LessonItemContainerSM>

    );
}

export default memo(LessonItemSM);