import { filter } from "lodash";


export const GetFile = (scripts, name) => {
    let found
    if(scripts){
        found = filter(scripts, (script)=>{
            return script.default.indexOf(name)>-1
        });
        if (found.length>0){
            return found[0].default
        }
       return false;
    }

    return false;
}