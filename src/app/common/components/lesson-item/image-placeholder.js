import { memo } from 'react';
import { Loading } from '../spinner';

import { ImagePlaceholder } from './styles';

const Placeholder = ({ refProp }) => (
    <ImagePlaceholder ref={refProp}>
        <Loading />
    </ImagePlaceholder>
);

export default memo(Placeholder);