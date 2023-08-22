import { memo, useState } from 'react';
import { PopoverHeader, Popover, PopoverBody } from 'reactstrap';
import { Button } from './content-styles';
const Bubble = (props) => {

    const { id, question, alias } = props;

    const [show, setShow] = useState(false);

    if (id && (id.length == 0) || !question) {
        return null;
    }

    const toggle = () => setShow(!show);

    const key = (alias && alias.length) ? `${alias}_${id}` : `id${id}`;

    return (
        <>
            <Button margin="0" id={key} onClick={toggle} className="btn-question" type="button">?</Button>
            <Popover isOpen={show} placement="bottom" trigger="legacy" target={key} toggle={toggle}>
                <PopoverHeader onClick={toggle}>Question</PopoverHeader>
                <PopoverBody onClick={toggle}>
                    {question}
                </PopoverBody>
            </Popover>
        </>
    );

}

export default memo(Bubble)