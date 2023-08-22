import React, { useEffect, useState, useRef, memo, useReducer } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import rehypeRaw from "rehype-raw";
import { Button } from "../../common/styles";
import CustomEditorNew from "../common/editor-new";
import { useForm } from "react-hook-form";
import ReactToPrint from "react-to-print";
import showdown from "showdown";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import Document from "../document";
import TurndownService from 'turndown/lib/turndown.browser.umd';
import './styles.scss'
import { downloadScript } from '../common/actions';

const ACTIONS = {
    DOWNLOAD: 'download',
    CLOSE: 'close',
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.DOWNLOAD:
            return {
                ...state,
                downloading: true,
            };
        case ACTIONS.CLOSE:
            return {
                ...state,
                sharing: false,
                downloading: false,
            };
        default:
            break;
    }
    return state;
}

const initialState = {
    sharing: false,
    downloading: false,
};


const CModal = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    let {
        title,
        footer,
        toggle,
        open,
        markdown,
        src,
        script,
        scrollable,
        saveUserScript,
        user_id,
        script_name,
        custom,
    } = props;
    const [markdownBody, setMarkdownBody] = useState("");
    const [edit, setEdit] = useState(false);
    const { control } = useForm({ mode: "onChange" });

    const toggleEdit = () => setEdit(!edit);
    let componentRef = useRef();
    const converter = new showdown.Converter();
    const [html, setHtml] = useState(false);
    const [newContent, setNewContent] = useState("")

    useEffect(() => {
        if (!custom) {
            fetch(src)
                .then((res) => {
                    return res.text();
                })
                .then((text) => {
                    setMarkdownBody(text);
                    setHtml(converter.makeHtml(text));
                });

        } else {
            setMarkdownBody(custom);
            setHtml(converter.makeHtml(custom));
        }
    });

    const handleSave = () => {
        toggleEdit();

        const ts = TurndownService()
        const content = ts.turndown(newContent)

        const data = {
            user_id,
            script_name,
            content
        }
        saveUserScript(data);
    };

    const Printable = (props) => {
        const { markdownBody } = props;
    
        return <ReactMarkdown children={markdownBody} rehypePlugins={[rehypeRaw]} className="modal-markdown"/>;
    };
    
    const close = () => {
        dispatch({ type: ACTIONS.CLOSE });
    };
    const download = async (props) => {
        const { title,markdownBody } = props;
    
        const data = {
            title,
            content:markdownBody
        }
        dispatch({ type: ACTIONS.DOWNLOAD });
        downloadScript(data, { close });
    };

    return (
        <Modal
            backdrop="static"
            size="lg"
            isOpen={open}
            toggle={toggle}
            scrollable={scrollable}
        >
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
                <div ref={(el) => (componentRef = el)}>
                    <h1 className="d-none d-print-block">{title}</h1>
                    {markdown && !edit && <Printable markdownBody={markdownBody} />}

                    {edit && html && (
                        <CustomEditorNew
                        customValue={html}
                        control={control}
                        name="user_script"
                        label={title}
                        setNewContent={setNewContent}
                        />
                    )}
                </div>
            </ModalBody>
            <ModalFooter>
                {(src || custom) && (
                    <div className="d-flex w-100 justify-content-between">
                        {!edit && (
                            <Button type="button" className="btn-submit" onClick={toggleEdit}>
                                Edit this Script
                            </Button>
                        )}
                        {edit && (
                            <Button
                                type="button"
                                className="btn-submit"
                                onClick={() => handleSave()}
                            >
                                Save Script
                            </Button>
                        )}
                        {!edit && (
                            <>
                                <Button
                                    className="btn-submit"
                                    onClick={async () => {
                                        await download({ title, markdownBody });
                                    }}
                                >
                                    Download
                                </Button>
                                <ReactToPrint
                                    trigger={() => <Button className="btn-submit">Print</Button>}
                                    content={() => componentRef}
                                />
                            </>
                        )}
                    </div>
                )}
                {!script && footer}
            </ModalFooter>
        </Modal>
    );


};



export default memo(CModal);
