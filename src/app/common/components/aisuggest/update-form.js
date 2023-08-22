import { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Loading from './loader';
import { SelectSearch } from '../../components/common';
import { Button } from './content-styles';
import { businesses } from '../../components/common/businesses';

const schema = yup.object({
    id: yup.string().required('Company ID is required'),
    business_type: yup.object().typeError('Pick a business type').required('Business type is required'),
}).required();

const UpdateForm = inject('properties')(observer((props) => {

    const { properties, id, update, close } = props;

    const { trigger, control, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const mutation = useMutation(update);

    useEffect(() => {
        if (id) {
            setValue('id', id || '');
        }
    }, [id]);


    const setCustomValue = (name, value) => {
        setValue(name, value);
        trigger(name);
    };

    const onSubmit = data => {
        const params = {
            ...data,
            business_type: (data.business_type) ? data.business_type.value : '',

        };
        mutation.mutate(params);
    };

    const renderError = () => {
        if (mutation.error) {
            return <div className="error">{mutation.error.message}</div>;
        }
        return null;
    };

    const renderSuccess = () => {
        if (mutation.isSuccess) {
            const business = getValues("business_type");
            const assessment = toJS(properties.selected_assessment);
            properties.saveSelectedAssessment({ ...assessment, business_type: business.value });
            close();
        }
        return null;
    };

    const renderForm = () => {

        if (mutation.isLoading) {
            return (<Loading />);
        }
        return (
            <form onSubmit={handleSubmit(onSubmit)} className="animate__animated animate__fadeIn">

                {renderError()}
                {renderSuccess()}

                <section className="col-md-12 col-sm-12 col-xs-12">
                    <SelectSearch style={{ textTransform: 'capitalize'}}
                        label="Select Business Type"
                        placeholder="Pick a business type"
                        name="business_type"
                        control={control}
                        setCustomValue={setCustomValue}
                        options={businesses}
                        error={errors?.business_type?.message}
                    />

                </section>

                <section className="col-md-6 col-sm-12 col-xs-12">
                    <Button type="submit" disabled={Object.keys(errors).length > 0} className="btn btn-submit"><i className="fa fa-save" aria-hidden="true" /> Update Business Type</Button>
                </section>

            </form>
        );
    };
    return (
        <section>
            {renderForm()}
        </section>
    );
}));

export default memo(UpdateForm);