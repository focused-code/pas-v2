import { memo } from "react";
import parser from 'react-html-parser';

const NewlineText = (props) => {
    const text = props.text;
    return parser(text.replace(/\n/g, "<br />"));
}

export default memo(NewlineText);