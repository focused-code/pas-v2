import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

import { StyledNote } from './styles';

export const View = (props) => {
    const { text } = props;
    const [show, setShow] = useState(false);
    const clean = DOMPurify.sanitize(text);

    if ((text.length === 0) || (text.length < 100)) {
        return <section>{parse(clean)}</section>;
    }

    if ((show === true) && (text.length > 100)) {
        return (
            <StyledNote>
                <ReactMarkdown>{parse(clean)}</ReactMarkdown>
                <span className="view-more" onClick={() => setShow(false)}>view less</span>
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