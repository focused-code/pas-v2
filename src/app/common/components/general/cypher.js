import { encode as base64_encode, decode as base64_decode  } from 'base-64';
import { logout } from './form-actions';

export const encrypt = (text, password) => {
    try {
        // move text to base64
        const base64 = base64_encode(text);
        // text string to array
        const arr = base64.split('');
        // arr of password
        const arrPass = password.split('');
        let lastPassLetter = 0;

        // encrypted string
        let encrypted = '';

        // encrypt
        for (let i=0; i < arr.length; i++) {

            const letter = arr[ i ];

            const passwordLetter = arrPass[ lastPassLetter ];

            const temp = getLetterFromAlphabetForLetter( passwordLetter, letter);

            if (temp) {
                // concat to the final response encrypted string
                encrypted += temp;
            } else {
                // if any error, return null
                return null;
            }		

            /*
                This is important: if we're out of letters in our 
                password, we need to start from the begining.
            */
            if (lastPassLetter == (arrPass.length - 1) ) {
                lastPassLetter = 0;
            } else {
                lastPassLetter ++;
            }		
        }

        // We finally return the encrypted string
        return encrypted;
    } catch (err) {
        console.log('err', err);
        logout();
    }
}

export const encryptSpecial = (text, password) => {
    try {
        // move text to base64
        const base64 = base64_encode(text);
        // text string to array
        const arr = base64.split('');
        // arr of password
        const arrPass = password.split('');
        let lastPassLetter = 0;

        // encrypted string
        let encrypted = '';

        // encrypt
        for (let i=0; i < arr.length; i++) {

            const letter = arr[ i ];

            const passwordLetter = arrPass[ lastPassLetter ];

            const temp = getLetterFromAlphabetForLetterSpecial( passwordLetter, letter);

            if (temp) {
                // concat to the final response encrypted string
                encrypted += temp;
            } else {
                // if any error, return null
                return null;
            }		

            /*
                This is important: if we're out of letters in our 
                password, we need to start from the begining.
            */
            if (lastPassLetter == (arrPass.length - 1) ) {
                lastPassLetter = 0;
            } else {
                lastPassLetter ++;
            }		
        }

        // We finally return the encrypted string
        return encrypted;
    } catch (err) {
        console.log('err', err);
        logout();
    }
}

export const encryptID = (text, password) => {
    try {
        // Do not encrypt if ID encrypted
        if(text && text!=='pas' && isNaN(parseInt(text))){
            return text
        }
        // move text to base64
        const base64 = base64_encode(text);
        // text string to array
        const arr = base64.split('');
        // arr of password
        const arrPass = password.split('');
        let lastPassLetter = 0;

        // encrypted string
        let encrypted = '';

        // encrypt
        for (let i=0; i < arr.length; i++) {

            const letter = arr[ i ];

            const passwordLetter = arrPass[ lastPassLetter ];

            const temp = getLetterFromAlphabetForLetterID( passwordLetter, letter);

            if (temp) {
                // concat to the final response encrypted string
                encrypted += temp;
            } else {
                // if any error, return null
                return null;
            }		

            /*
                This is important: if we're out of letters in our 
                password, we need to start from the begining.
            */
            if (lastPassLetter == (arrPass.length - 1) ) {
                lastPassLetter = 0;
            } else {
                lastPassLetter ++;
            }		
        }

        // We finally return the encrypted string
        return encrypted;
    } catch (err) {
        console.log('err', err);
        logout();
    }
}


const getLetterFromAlphabetForLetter = (letter, letterToChange) => {
     // this is the alphabet we know, plus numbers and the = sign 
     const abc = 'abcdefghijklmnopqrstuvwxyz0123456789=ABCDEFGHIJKLMNOPQRSTUVWXYZ":,}';

     // get the position of the given letter, according to our abc
     const posLetter = abc.indexOf( letter );

     // if we cannot get it, then we can't continue
     if (posLetter == -1) {
         console.log('Password letter ' + letter + ' not allowed.');
         return null;
     }

     // according to our abc, get the position of the letter to encrypt
     const posLetterToChange = abc.indexOf( letterToChange );

     // again, if any error, we cannot continue...
     if (posLetterToChange == -1) {
         console.log('Password letter ' + letter + ' not allowed.');
         return null;
     }

     // let's build the new abc. this is the important part
     const part1 = abc.substring(posLetter, abc.length);
     const part2 = abc.substring(0, posLetter);
     const newABC = '' + part1 + '' + part2;

     // we get the encrypted letter
     const letterAccordingToAbc = newABC.split('')[ posLetterToChange ];

     // and return to the routine...
     return letterAccordingToAbc;	
}

const getLetterFromAlphabetForLetterSpecial = (letter, letterToChange) => {
    // this is the alphabet we know, plus numbers and the = sign 
    const abc = 'abcdefghijklmnopqrstuvwxyz0123456789=ABCDEFGHIJKLMNOPQRSTUVWXYZ":,}-';

    // get the position of the given letter, according to our abc
    const posLetter = abc.indexOf( letter );

    // if we cannot get it, then we can't continue
    if (posLetter == -1) {
        console.log('Password letter ' + letter + ' not allowed.');
        return null;
    }

    // according to our abc, get the position of the letter to encrypt
    const posLetterToChange = abc.indexOf( letterToChange );

    // again, if any error, we cannot continue...
    if (posLetterToChange == -1) {
        console.log('Password letter ' + letter + ' not allowed.');
        return null;
    }

    // let's build the new abc. this is the important part
    const part1 = abc.substring(posLetter, abc.length);
    const part2 = abc.substring(0, posLetter);
    const newABC = '' + part1 + '' + part2;

    // we get the encrypted letter
    const letterAccordingToAbc = newABC.split('')[ posLetterToChange ];

    // and return to the routine...
    return letterAccordingToAbc;	
}

const getLetterFromAlphabetForLetterID = (letter, letterToChange) => {
    // this is the alphabet we know, plus numbers and the = sign 
    const abc = 'abcdefghijklmnopqrstuvwxyz0123456789=ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // get the position of the given letter, according to our abc
    const posLetter = abc.indexOf( letter );

    // if we cannot get it, then we can't continue
    if (posLetter == -1) {
        console.log('Password letter ' + letter + ' not allowed.');
        return null;
    }

    // according to our abc, get the position of the letter to encrypt
    const posLetterToChange = abc.indexOf( letterToChange );

    // again, if any error, we cannot continue...
    if (posLetterToChange == -1) {
        console.log('Password letter ' + letter + ' not allowed.');
        return null;
    }

    // let's build the new abc. this is the important part
    const part1 = abc.substring(posLetter, abc.length);
    const part2 = abc.substring(0, posLetter);
    const newABC = '' + part1 + '' + part2;

    // we get the encrypted letter
    const letterAccordingToAbc = newABC.split('')[ posLetterToChange ];

    // and return to the routine...
    return letterAccordingToAbc;	
}

export const decrypt = (password, text) => {
    try {
        // convert the string to decrypt into an array
        const arr = text.split('');
        // let's also create an array from our password
        const arrPass = password.split('');
        // keep control about which letter from the password we use
        let lastPassLetter = 0;

        // this is the final decrypted string
        let decrypted = '';

        // let's start...
        for (let i=0; i < arr.length; i++) {

            // next letter from the string to decrypt
            const letter = arr[ i ];

            // get the next letter from the password
            const passwordLetter = arrPass[ lastPassLetter ];

            // get the decrypted letter according to the password
            const temp = getInvertedLetterFromAlphabetForLetter( passwordLetter, letter );

            if (temp) {
                // concat the response
                decrypted += temp;
            } else {
                // if any error, return null
                return null;
            }		

            // if our password is too short, let's start again from the first letter
            if (lastPassLetter == (arrPass.length - 1) ) {
                lastPassLetter = 0;
            } else {
                lastPassLetter ++;
            }		
        }

        // return the decrypted string and converted from base64 to plain text
        return base64_decode(decrypted);
    } catch (error) {
        console.log('error', error.message);
        logout();
    }
}

export const decryptSpecial = (password, text) => {
    try {
        // convert the string to decrypt into an array
        const arr = text.split('');
        // let's also create an array from our password
        const arrPass = password.split('');
        // keep control about which letter from the password we use
        let lastPassLetter = 0;

        // this is the final decrypted string
        let decrypted = '';

        // let's start...
        for (let i=0; i < arr.length; i++) {

            // next letter from the string to decrypt
            const letter = arr[ i ];

            // get the next letter from the password
            const passwordLetter = arrPass[ lastPassLetter ];

            // get the decrypted letter according to the password
            const temp = getInvertedLetterFromAlphabetForLetterSpecial( passwordLetter, letter );
            
            if (temp) {
                // concat the response
                decrypted += temp;
            } else {
                // if any error, return null
                return null;
            }		

            // if our password is too short, let's start again from the first letter
            if (lastPassLetter == (arrPass.length - 1) ) {
                lastPassLetter = 0;
            } else {
                lastPassLetter ++;
            }		
        }

        // return the decrypted string and converted from base64 to plain text
        return base64_decode(decrypted);
    } catch (error) {
        console.log('error', error.message);
        logout();
    }
}

export const decryptID = (password, text) => {
    try{
        // convert the string to decrypt into an array
        const arr = text.split('');

        // let's also create an array from our password
        const arrPass = password.split('');

        // keep control about which letter from the password we use
        let lastPassLetter = 0;

        // this is the final decrypted string
        let decrypted = '';

        // let's start...
        for (let i=0; i < arr.length; i++) {

            // next letter from the string to decrypt
            const letter = arr[ i ];

            // get the next letter from the password
            const passwordLetter = arrPass[ lastPassLetter ];

            // get the decrypted letter according to the password
            const temp = getInvertedLetterFromAlphabetForLetterID( passwordLetter, letter );

            if (temp) {
                // concat the response
                decrypted += temp;
            } else {
                // if any error, return null
                return null;
            }		

            // if our password is too short, let's start again from the first letter
            if (lastPassLetter == (arrPass.length - 1) ) {
                lastPassLetter = 0;
            } else {
                lastPassLetter ++;
            }		
        }

        // return the decrypted string and converted from base64 to plain text
        return base64_decode(decrypted);
    } catch (error) {
        console.log('error', error);
        logout();
    }
 
}

const getInvertedLetterFromAlphabetForLetter = (letter, letterToChange) => {
    // the alphabet together with numbers and the equal sign 
    const abc = 'abcdefghijklmnopqrstuvwxyz0123456789=ABCDEFGHIJKLMNOPQRSTUVWXYZ":,}';

        const posLetter = abc.indexOf(letter);

        if (posLetter == -1) {
            console.log('Password letter ' + letter + ' not allowed.');
            return null;
        }

        const part1 = abc.substring(posLetter, abc.length);
        const part2 = abc.substring(0, posLetter);

        const newABC = '' + part1 + '' + part2;

        const posLetterToChange = newABC.indexOf( letterToChange );

        if (posLetterToChange == -1) {
            console.log('Password letter ' + letter + ' not allowed.');
            return null;
        }

        const letterAccordingToAbc = abc.split('')[ posLetterToChange ];

        return letterAccordingToAbc;

}

const getInvertedLetterFromAlphabetForLetterID = (letter, letterToChange) => {
    // the alphabet together with numbers and the equal sign 
    const abc = 'abcdefghijklmnopqrstuvwxyz0123456789=ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        const posLetter = abc.indexOf(letter);

        if (posLetter == -1) {
            console.log('Password letter ' + letter + ' not allowed.');
            return null;
        }

        const part1 = abc.substring(posLetter, abc.length);
        const part2 = abc.substring(0, posLetter);

        const newABC = '' + part1 + '' + part2;

        const posLetterToChange = newABC.indexOf( letterToChange );

        if (posLetterToChange == -1) {
            console.log('Password letter ' + letter + ' not allowed.');
            return null;
        }

        const letterAccordingToAbc = abc.split('')[ posLetterToChange ];

        return letterAccordingToAbc;

}

// Credit
// https://stackoverflow.com/a/34068497
function isBase64(str) {
    if (str ==='' || str.trim() ===''){ return false; }
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
}

const getInvertedLetterFromAlphabetForLetterSpecial = (letter, letterToChange) => {
    // the alphabet together with numbers and the equal sign 
    const abc = 'abcdefghijklmnopqrstuvwxyz0123456789=ABCDEFGHIJKLMNOPQRSTUVWXYZ":,}-';

        const posLetter = abc.indexOf(letter);

        if (posLetter == -1) {
            console.log('Password letter ' + letter + ' not allowed.');
            return null;
        }

        const part1 = abc.substring(posLetter, abc.length);
        const part2 = abc.substring(0, posLetter);

        const newABC = '' + part1 + '' + part2;

        const posLetterToChange = newABC.indexOf( letterToChange );

        if (posLetterToChange == -1) {
            console.log('Password letter ' + letter + ' not allowed.');
            return null;
        }

        const letterAccordingToAbc = abc.split('')[ posLetterToChange ];

        return letterAccordingToAbc;

}