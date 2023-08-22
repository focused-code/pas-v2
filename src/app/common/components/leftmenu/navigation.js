import {
    Fragment, useState, useEffect, useMemo,
} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { CustomInput } from 'reactstrap';
import { find } from 'lodash';

export const Navigation = (props) => {
    const {
        titles, navs, pathname, modules,
    } = props;

    const [open, setOpen] = useState(null);

    const [openall, setOpenAll] = useState(false);

    const paths = useMemo(() => ['financials', 'valuation', 'dgintro', 'introduction'], []);

    const params = useParams();

    useEffect(() => {
        if (props.alias) {
            if (!paths.includes(pathname)) {
                // Get the active category and set it in state
                const module = find(modules, (each) => each.module_alias === props.alias);
                if (module) {
                    const { module_meta } = module;
                    setOpen(module_meta.module_category);
                }
            } else {
                setOpen(null);
            }
        }
    }, [pathname, props.alias, modules, paths]);

    const getModule = (path) => find(modules, each => each.module_path === path);

    const selectThis = (selected) => {
        if (selected === open) {
            setOpen(null);
        } else {
            setOpen(selected);
        }
    };

    const toggleMenu = () => {
        setOpenAll(!openall);
        if (!openall) {
            props.toggle();
        }
    };

    const renderArrow = (title) => {
        if (openall) {
            return <i className="fa fa-chevron-right direction rotate down" />;
        }
        return ((open && open === title) ? <i className="fa fa-chevron-right direction rotate down" /> : <i className="fa fa-chevron-right direction rotate" />);
    };

    const getLinks = (title) => {
        const links = navs[title];
        if (!open && !openall) {
            return null;
        }

        if ((open && open === title) || openall) {
            return (
                <ul>
                    {
                        links.map((link) => {
                            const {
                                id,
                                path,
                                style,
                                current,
                                alias,
                                module,
                            } = link;
                            if (paths.includes(path)) {
                                return null;
                            }
                            return (
                                <li key={id} className={`${style} animate__animated animate__fadeInDown`}>
                                    {(current) ? alias : <NavLink state={{ module }} to={`/assessment/${params.id}/${path}`}>{alias}</NavLink>}
                                    {props.done(path)}
                                </li>
                            );
                        })
                    }
                </ul>
            );
        }
        return null;
    };

    const getTopLinks = () => paths.map((path) => {
        const module = getModule(path);
        if (module) {
            const style = props.active(path);
            const current = (pathname === path);
            return (
                <li key={path} className={style}>
                    {(current) ? module.module_alias : <NavLink state={{ module }} to={`/assessment/${params.id}/${path}`}>{module.module_alias}</NavLink>}
                    {props.done(path)}
                </li>
            );
        }
        return null;
    });
    const getOtherLinks = () => {
        const { module_set_name } = props.assessment;
        let names = [...titles];
        if (module_set_name === 'FullDigitalAssessment') {
            names = names.slice(2); // Remove Foundations and Introduction category from the list
        }

        return names.map((title) => (
            <li key={title}>
                <span onClick={() => selectThis(title)}>{title}</span> {renderArrow(title)}
                {getLinks(title)}
            </li>
        ));
    };

    return (
        <Fragment>
            <CustomInput type="switch" id="toggle-menu" name="toggle-menu" value={openall} label={(openall) ? 'Close All' : 'Open All'} onChange={toggleMenu} />
            <li className={props.active('summary')}><NavLink to={`/assessment/${params.id}/summary`}>Summary</NavLink></li>
            {getTopLinks()}
            {getOtherLinks()}
        </Fragment>
    );
};
