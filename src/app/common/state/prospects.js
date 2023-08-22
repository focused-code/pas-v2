import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ProspectsContext = createContext({});

export const ProspectsProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [prospect, setSelectedProspect] = useState(null);
    const [listSize, setListSize] = useState('');
    const [location, setLocation] = useState('');
    const [zip, setZip] = useState('');
    const [firstGo, setFirstGo] = useState(false);
    const [secondGo, setSecondGo] = useState(false);
    const [thirdGo, setThirdGo] = useState(false);
    const [fourthGo, setFourthGo] = useState(false);
    const [fifthGo, setFifthGo] = useState(false);
    const [done, setDone] = useState(false);
    const [shouldRequest, setShouldRequest] = useState(false);
    const [industry, setIndustry] = useState([]);
    const [firstKeyword, setFirstKeyword] = useState('');
    const [secondKeyword, setSecondKeyword] = useState('');
    const [thirdKeyword, setThirdKeyword] = useState('');
    const [radius, setRadius] = useState('');
    const [confirm, setConfirm] = useState('');

    const reset = () => {
        setSelectedProspect(null);
        setListSize('');
        setLocation('');
        setZip('');
        setFirstGo(false);
        setSecondGo(false);
        setThirdGo(false);
        setFourthGo(false);
        setFifthGo(false);
        setDone(false);
        setShouldRequest(false);
        setIndustry([]);
        setFirstKeyword('');
        setSecondKeyword('');
        setThirdKeyword('');
        setRadius('');
        setConfirm('');
    };

    const processSelected = () => {

        if (confirm === 'Yes') {
            const obj = {
                listSize,
                radius: radius.value,
                confirm,
            };

            if (location.length > 0) {
                obj.location = location;
            }

            if (zip.length > 0) {
                obj.zip = zip;
            }

            if (industry.length > 0) {
                obj.industry = industry.map((e) => e.value).join(',');
            }

            if (firstKeyword.length > 0) {
                obj.firstKeyword = firstKeyword;
            }

            if (secondKeyword.length > 0) {
                obj.secondKeyword = secondKeyword;
            }


            if (thirdKeyword.length > 0) {
                obj.thirdKeyword = thirdKeyword;
            }

            setSelectedProspect(obj);

        }

    };

    // Make the context object:
    const prospectsContext = {
        prospect,
        setSelectedProspect,
        listSize,
        setListSize,
        location,
        setLocation,
        zip,
        setZip,
        industry,
        setIndustry,
        firstKeyword,
        secondKeyword,
        thirdKeyword,
        setFirstKeyword,
        setSecondKeyword,
        setThirdKeyword,
        radius,
        setRadius,
        confirm,
        setConfirm,
        firstGo,
        setFirstGo,
        secondGo,
        setSecondGo,
        thirdGo,
        setThirdGo,
        fourthGo,
        setFourthGo,
        fifthGo,
        setFifthGo,
        done,
        setDone,
        shouldRequest,
        setShouldRequest,
        processSelected,
        reset,
    };

    // pass the value in provider and return
    return <ProspectsContext.Provider value={prospectsContext}>{children}</ProspectsContext.Provider>;
};


ProspectsProvider.propTypes = {
    prospect: PropTypes.object,
    firstGo: PropTypes.bool,
    secondGo: PropTypes.bool,
    thirdGo: PropTypes.bool,
    fourthGo: PropTypes.bool,
    fifthGo: PropTypes.bool,
    done: PropTypes.bool,
    shouldRequest: PropTypes.bool,
    listSize: PropTypes.string,
    location: PropTypes.string,
    zip: PropTypes.string,
    industry: PropTypes.array,
    firstKeyword: PropTypes.string,
    secondKeyword: PropTypes.string,
    thirdKeyword: PropTypes.string,
    radius: PropTypes.string,
    confirm: PropTypes.string,
};

ProspectsProvider.defaultProps = {
    prospect: null,
    firstGo: false,
    secondGo: false,
    thirdGo: false,
    fourthGo: false,
    fifthGo: false,
    done: false,
    shouldRequest: false,
    listSize: '',
    location: '',
    zip: '',
    industry: [],
    firstKeyword: '',
    secondKeyword: '',
    thirdKeyword: '',
    radius: '',
    confirm: '',

};
