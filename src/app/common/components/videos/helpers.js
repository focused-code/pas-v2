import { find } from 'lodash';

export const roundToTwo = (num) => +(`${Math.round(`${num}e+2`)}e-2`);

export const takenQuiz = (list, id) => {
    const found = find(list, (e) => e.id === id);
    if (found) {
        return (found.quiz_score !== 'None');
    }
    return false;
};