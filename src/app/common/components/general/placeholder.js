import { Loading } from '../spinner';

import { ImagePlaceholder } from './styles';

export const Placeholder = ({ refProp }) => (
    <ImagePlaceholder ref={refProp}>
        <Loading size="sm" />
    </ImagePlaceholder>
);