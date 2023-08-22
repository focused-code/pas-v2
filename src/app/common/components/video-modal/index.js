import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Player from '../player';
import { PlayerContainer } from './styles';

export const VideoModal = (props) => {

    const { status, close, video } = props;

    if (!status || !video) {
        return null;
    }

    return (
        <Modal backdrop="static" size="lg" isOpen={status} toggle={close}>
            <ModalHeader>{video.title}</ModalHeader>
            <ModalBody>
                <PlayerContainer>
                    <Player
                        image={video.image}
                        video={video.video}
                    />
                </PlayerContainer>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => close()}>Close</Button>
            </ModalFooter>
        </Modal>
    )
}