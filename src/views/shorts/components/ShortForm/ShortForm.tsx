import DateTimepicker from '@/components/ui/DatePicker/DateTimepicker'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import {
    HiUserCircle,
    HiCake,
    HiCheck,
} from 'react-icons/hi'
import { Field, FieldProps, FormikErrors, FormikTouched } from 'formik'
import { Badge, Button, Select } from '@/components/ui'

import { ControlProps, OptionProps, components } from 'react-select'

type FormFieldsName = {
    upload: string
    name: string
    title: string
    email: string
    location: string
    phoneNumber: string
    birthday: Date
}

type ShortFormProps = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

type ColorOption = {
    value: string
    label: string
    color: string
}

const colorOptions = [
    {
        value: 'Scheduled',
        label: 'Scheduled',
        color: 'bg-blue-500',
    },
    {
        value: 'Paused',
        label: 'Paused',
        color: 'bg-red-500',
    },
]

const CustomSelectOption = ({
    innerProps,
    label,
    data,
    isSelected,
}: OptionProps<ColorOption>) => {
    return (
        <div
            className={`flex items-center justify-between p-2 ${
                isSelected
                    ? 'bg-gray-100 dark:bg-gray-500'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-600'
            }`}
            {...innerProps}
        >
            <div className="flex items-center">
                <Badge className={data.color} />
                <span className="ml-2 rtl:mr-2 capitalize">{label}</span>
            </div>
            {isSelected && <HiCheck className="text-emerald-500 text-xl" />}
        </div>
    )
}
const { Control } = components

const CustomControl = ({ children, ...props }: ControlProps<ColorOption>) => {
    const selected = props.getValue()[0]

    return (
        <Control className="capitalize" {...props}>
            {selected && (
                <Badge className={`${selected.color} ltr:ml-4 rtl:mr-4`} />
            )}
            {children}
        </Control>
    )
}

const ShortForm = (props: ShortFormProps) => {
    const { touched, errors } = props

    return (
        <>
                                <FormItem
                                    label="Prefered"
                                    asterisk={true}
                                    //invalid={errors.color && touched.color}
                                    //errorMessage={errors.color}
                                >
                                    <Field name="color" >
                                        {({ field, form }: FieldProps) => (
                                            <Select<ColorOption>
                                                field={field}
                                                form={form}
                                                options={colorOptions}
                                                value={colorOptions.filter(
                                                    (option) =>
                                                        option.value ===
                                                        form.values.color
                                                )}
                                                components={{
                                                    Option: CustomSelectOption,
                                                    Control: CustomControl,
                                                }}
                                                onChange={(option) =>
                                                    form.setFieldValue(
                                                        field.name,
                                                        option?.value
                                                    )
                                                }
                                            />
                                        )}
                                    </Field>
                                </FormItem>
            <FormItem
                label="Scheduled to"
                invalid={(errors.birthday && touched.birthday) as boolean}
                errorMessage={errors.birthday as string}
            >
                <Field name="birthday" placeholder="Date"> 
                    {({ field, form }: FieldProps) => (
                        <DateTimepicker
                            field={field}
                            form={form}
                            value={field.value}
                            inputPrefix={<HiCake className="text-xl" />}
                            onChange={(date) => {
                                form.setFieldValue(field.name, date)
                            }}
                        />
                    )}
                </Field>
            </FormItem>
            <FormItem
                label="Title"
                invalid={errors.name && touched.name}
                errorMessage={errors.name}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="name"
                    placeholder="Name"
                    component={Input}
                />
            </FormItem>
                    <FormItem
                            label="Description"
                            invalid={errors.name && touched.name}
                            errorMessage={errors.name}
                        >
                            <Field
                                textArea
                                type="text"
                                autoComplete="off"
                                name="content"
                                placeholder="Short Description"
                                component={Input}
                            />
                    </FormItem>
            <FormItem className="mb-0">
                <Button block variant="solid" type="submit">
                     Save
                </Button>
            </FormItem>
                                
        </>
    )
}

export default ShortForm
