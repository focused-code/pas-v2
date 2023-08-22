import { filter } from "lodash";


export const ExtractScript = (scripts, name) => {
    let found
    if(scripts){
        found = filter(scripts, (script)=>{
            return script.script_name.indexOf(name)>-1
        });
        if (found.length>0){
            return found[0].content
        }
       return false;
    }

    return false;
}