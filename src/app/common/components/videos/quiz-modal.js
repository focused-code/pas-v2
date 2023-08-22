import { memo } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Quiz from './quiz';

export const QuizModal = (props) => {

    const { selected, status, toggle, user } = props;

    if (!selected || !user) {
        return null;
    }

    return (
        <Modal size="lg" backdrop="static" isOpen={status} toggle={toggle}>
            <ModalHeader>{selected && selected.title} - Quiz</ModalHeader>
            <ModalBody>
                <Quiz type={selected.type} user={user} video={selected} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => toggle()}>Close</Button>
            </ModalFooter>
        </Modal>
    )
}

export default memo(QuizModal);