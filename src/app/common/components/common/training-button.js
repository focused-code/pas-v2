import { useContext } from 'react';
import { CoachingPortalContext, FlashCoachingContext } from '../../state';
import { ReactComponent as VideoIcon } from './video-icon.svg';
import { Button } from './styles';

export const TrainingButton = ({ type }) => {

    if (!type) {
        return null;
    }

    const coaching = useContext(CoachingPortalContext);
    const flash = useContext(FlashCoachingContext);

    const trainings = coaching.trainings.length ? coaching.trainings : flash.trainings

    const onClick = () => {
        const found = trainings.find(e => e.id === type);
        if (found) {
            coaching.setSelectedTraining(found);
            coaching.setShowTraining(true);
            flash.setSelectedTraining(found);
            flash.setShowTraining(true);
        }
    };

    return (
        <Button disabled={(trainings.length === 0)} type="button" onClick={() => onClick()} margin="0" className="btn btn-training"><VideoIcon /> Training Video</Button>
    );
};