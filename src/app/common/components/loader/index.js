import { memo } from 'react';
import ContentLoader, { Facebook } from 'react-content-loader';
import { Spinner } from 'reactstrap';
import { LoadingSection } from '../../common/styles';


const Loader = () => (
    <LoadingSection>
        <Spinner type="border" color="light" />
        <p>Loading...</p>
    </LoadingSection>
);

export default memo(Loader);

export const Loading = () => {
    return (
        <ContentLoader
            speed={2}
            width={420}
            height={100}
            viewBox="0 0 420 100"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="3" ry="3" width="410" height="10" />
            <rect x="0" y="20" rx="3" ry="3" width="380" height="10" />
            <rect x="0" y="40" rx="3" ry="3" width="350" height="10" />
            <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
            <rect x="0" y="80" rx="3" ry="3" width="150" height="10" />
        </ContentLoader>
    );
};