import { useState, memo } from 'react';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

import { StyledNote } from './styles';

const View = (props) => {
    const { text } = props;
    const [show, setShow] = useState(false);
    const clean = DOMPurify.sanitize(text);

    if (!text) {
        return null;
    }

    if ((text.length === 0) || (text.length < 100)) {
        return <section>{parse(clean)}</section>;
    }

    if ((show === true) && (text.length > 100)) {
        return (
            <StyledNote>
                {parse(clean)}
                <span className="view-more" onClick={() => setShow(false)}>show less</span>
            </StyledNote>
        );
    }

    const sliced = clean.slice(0, 100);

    return (
        <StyledNote>
            {parse(sliced)}...
            <span className="view-more" onClick={() => setShow(true)}>view more</span>
        </StyledNote>
    );
};

export default memo(View);