import { useLocation } from "react-router-dom";
import { SubHeading } from "../overview/styles";
import { startCase } from "lodash";


export const Breadcrumbs = (props) => {
    const location = useLocation();
    const splitUrl = location.pathname.split('/').reverse()
    const SubHeader = startCase(splitUrl[0].replaceAll('-',' '))
    return (

        <SubHeading className="bg-white p-2 pl-3 d-block">{SubHeader}</SubHeading>

    )
}