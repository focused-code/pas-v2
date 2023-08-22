import { useContext, memo, useState, useEffect } from 'react';
import {
    Container,
    Heading,
    ClientBox,
    ImageBox,
    Button,
    BioBox,
    DownloadButton,
    DownloadBox,
    Calendar
} from './styles';

import avatar from './nobody.jpeg';
import { ReactComponent as VideoIcon } from './download.svg';
import { CustomSelect } from '../common/custom-select';
import { toJS } from 'mobx';
import properties from '../../services/properties';

const TeamList = (props) => {
    const { checklist, listLabel, listMessage, teamMembers, loading,saveTeamMember,selectedTeamMember } = props

    const [teamMember, setTeamMember] = useState(null);
    const user = toJS(properties.user);

    const selected = (teamMember) ? `${teamMember.user_id}` : '';
    
    let select_cache = null; // This is a hack since onSelectChange is triggering twice

    useEffect(() => {
        
      if(selectedTeamMember){
        setTeamMember(selectedTeamMember)
      }
    }, [selectedTeamMember])
    

    const onSelectChange = (e) => {
        if (select_cache) {
            const found = teamMembers.find((i) => Number(i.user_id) === Number(e.target.value));
            setTeamMember(found);
            setTimeout(() => {
                saveTeamMember(user.id, found.user_id);
                select_cache = null;
            }, 100);
        }
        select_cache = e;
    };

    const renderTeamMembers = () => {
        return (
            <>
                {((teamMembers.length === 0) || loading) ? <CustomSelect width="100%" inactive value="" onChange={() => false} /> : (
                    <CustomSelect width="100%" value={selected} onChange={onSelectChange}>
                        <option value="" disabled>Select your advisor</option>
                        {teamMembers.map(e => <option key={e.id} value={e.user_id}>{`${e.first_name} ${e.last_name}`}</option>)}
                    </CustomSelect>
                )}
            </>
        )
    };

    const renderButton = () => {
        return (loading) ? <Button margin="0 0 0 1rem" onClick={() => false} className="btn-save"><i className="fa fa-spinner fa-spin" /> Loading...</Button> : ''
    }

    return (
        <Container>
            <ImageBox>
                {(teamMember) ? <img src={(teamMember) ? teamMember.image_url : avatar} alt="" /> : ``}
            </ImageBox>
            <ClientBox>
                <Heading>{listLabel}</Heading>
                <BioBox>
                    <section>
                        {renderTeamMembers()}
                        {renderButton()}
                    </section>
                    <section className="attention">
                        {listMessage}
                    </section>
                </BioBox>

            </ClientBox>
            {
                teamMember &&
                <Calendar className={'w-25 p-3'}>
                    {teamMember.first_name}'s calendar link for your three FREE 30-minute one-to-one coaching sessions.
                    <br /><br />
                    <a href={teamMember.calendar_link} target='_blank'>{teamMember.first_name}'s 30-minute link</a>
                </Calendar>
            }
            {/* <DownloadBox>
                <DownloadButton href={checklist} target="_blank" className="btn-download"><VideoIcon /></DownloadButton>
                <span>You can download your entire checklist here.</span>
            </DownloadBox> */}
        </Container>
    );
};

export default memo(TeamList)