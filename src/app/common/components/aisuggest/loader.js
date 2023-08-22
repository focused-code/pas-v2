import { memo } from 'react';
import ContentLoader from "react-content-loader"
import { LoaderContainer } from './styles';

const mscreen = screen.width;
const width = Math.round(mscreen * 0.3333);
const height = Math.round(mscreen * 0.0694);

const Loading = () => (
    <LoaderContainer>
    <ContentLoader
        speed={2}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
            <rect x={0.00694 * mscreen} y={0.01041 * mscreen} rx="3" ry="3" width={0.1333 * mscreen} height={0.01805 * mscreen} />
            <rect x={0.1527 * mscreen} y={0.0111 * mscreen} rx="3" ry="3" width={0.1333 * mscreen} height={0.01805 * mscreen} />
            <rect x={0.2993 * mscreen} y={0.01041 * mscreen} rx="3" ry="3" width={0.1333 * mscreen} height={0.01805 * mscreen} />
            <rect x={0.0375 * mscreen} y={0.0423 * mscreen} rx="3" ry="3" width={0.1333 * mscreen} height={0.009722 * mscreen} />
            <rect x={0.01930 * mscreen} y={0.0423 * mscreen} rx="3" ry="3" width={0.1333 * mscreen} height={0.009722 * mscreen} />
            <rect x={0.0173 * mscreen} y={0.0611 * mscreen} rx="3" ry="3" width={0.1333 * mscreen} height={0.009722 * mscreen} />
            <rect x={0.2166 * mscreen} y={0.0597 * mscreen} rx="3" ry="3" width={0.1333 * mscreen} height={0.009722 * mscreen} />
    </ContentLoader>
    </LoaderContainer>
)

export default memo(Loading);

