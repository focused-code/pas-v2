import classNames from 'classnames';
import { Left, Right, BatchItem, NoteBox } from './styles';
import { View } from './view';
import Button from './dropbutton';
import { checkStatus } from './helpers';
export const Item = (props) => {

    const { notice, analysis } = props;

    const status = checkStatus(analysis.read_ids, notice.id); // if true = read

    const readstyle = classNames({
        'read': !status,
    });

    return (
        <BatchItem>
            <Left>
                <h3 className={readstyle}>{notice.title}</h3>
                <NoteBox>
                    <View text={notice.description} />
                </NoteBox>
            </Left>
            <Right><Button {...props} status={status} /></Right>
        </BatchItem>
    )
}