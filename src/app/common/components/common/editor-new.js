import { capitalize } from 'lodash';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Controller } from 'react-hook-form';
import { Label, Editor } from './styles';
import 'flatpickr/dist/themes/material_blue.css';

const CustomEditorNew = (props) => {
    let { name, error, label, defaultText, control, customValue, setNewContent, setCustomValue } = props;
    const options = {
        removePlugins: ['CKFinder'],
        toolbar: ['Heading', 'Link', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo']
    };

    return (
        <div className="form-group animate__animated animate__fadeIn" style={{ width: '100%' }}>
            <Label className="question-label" htmlFor={name}>{capitalize(label || name)}</Label>
            <Controller
                control={control}
                name={name}
                render={({ field: { onBlur, value } }) => (
                    <Editor
                        editor={ClassicEditor}
                        config={options}
                        name={name}
                        data={customValue}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            if (setNewContent) {
                                setNewContent(data)
                            } else if (setCustomValue) {
                                setCustomValue(name, data);
                            }
                        }}
                        onReady={(editor) => {
                            if (defaultText && editor) {
                                editor.setData(defaultText);
                            }
                        }}
                    />
                )}
            />
            {error ? (<div className="error">{error}</div>) : null}
        </div>
    );
};

export default CustomEditorNew;