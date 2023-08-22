import { ReactComponent as NewIcon } from './new-icon.svg';
import classNames from 'classnames';
export const NewSticker = ({ selected }) => {

    const styles = classNames({
        'selectedsvg': selected,
    });

    return <NewIcon className={styles} />;

}