
import ContentLoader from 'react-content-loader'

const Loading = props => (
    <ContentLoader viewBox="0 0 500 475" height={475} width={500} {...props}>
        <rect x="0" y="0" rx="3" ry="3" width="150" height="15" />
        <rect x="0" y="25" rx="3" ry="3" width="400" height="6" />
        <rect x="0" y="35" rx="3" ry="3" width="350" height="6" />
        <rect x="0" y="45" rx="3" ry="3" width="200" height="6" />
        <rect x="0" y="55" rx="3" ry="3" width="100" height="6" />

        <rect x="0" y="85" rx="3" ry="3" width="150" height="15" />
        <rect x="0" y="110" rx="3" ry="3" width="400" height="6" />
        <rect x="0" y="120" rx="3" ry="3" width="350" height="6" />
        <rect x="0" y="130" rx="3" ry="3" width="200" height="6" />
        <rect x="0" y="140" rx="3" ry="3" width="100" height="6" />

        <rect x="0" y="170" rx="3" ry="3" width="150" height="15" />
        <rect x="0" y="195" rx="3" ry="3" width="400" height="6" />
        <rect x="0" y="205" rx="3" ry="3" width="350" height="6" />
        <rect x="0" y="215" rx="3" ry="3" width="200" height="6" />
        <rect x="0" y="225" rx="3" ry="3" width="100" height="6" />
    </ContentLoader>
)

export default Loading