
import ContentLoader from 'react-content-loader';
import { LoaderContainer } from './video-styles';

const Loader = () => (
    <ContentLoader
        height={300}
        speed={3}
        backgroundColor="#aaa"
        foregroundColor="#fefefe"
        viewBox="0 0 878 300"
    >
        <rect x="0" y="0" rx="5" ry="5" width="500" height="300" />
        <rect x="520" y="3" rx="4" ry="4" width="450" height="4" />
        <rect x="520" y="13" rx="3" ry="3" width="350" height="4" />
        <rect x="520" y="23" rx="3" ry="3" width="250" height="4" />
        <rect x="520" y="33" rx="3" ry="3" width="150" height="4" />

        <rect x="520" y="63" rx="4" ry="4" width="450" height="4" />
        <rect x="520" y="73" rx="3" ry="3" width="350" height="4" />
        <rect x="520" y="83" rx="3" ry="3" width="250" height="4" />
        <rect x="520" y="93" rx="3" ry="3" width="150" height="4" />

        <rect x="520" y="123" rx="4" ry="4" width="450" height="4" />
        <rect x="520" y="133" rx="3" ry="3" width="350" height="4" />
        <rect x="520" y="143" rx="3" ry="3" width="250" height="4" />
        <rect x="520" y="153" rx="3" ry="3" width="150" height="4" />

    </ContentLoader>
);


const SmallLoader = () => (
    <ContentLoader
        height={300}
        speed={3}
        backgroundColor="#aaa"
        foregroundColor="#fefefe"
        viewBox="0 0 500 300"
    >
        <rect x="0" y="0" rx="5" ry="5" width="500" height="300" />
    </ContentLoader>
);

export const SmallLoading = () => (
    <LoaderContainer>
        <SmallLoader />
    </LoaderContainer>
);

export const Loading = () => (
    <LoaderContainer>
        <Loader />
    </LoaderContainer>
);
