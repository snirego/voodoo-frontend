import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { BsFacebook, BsTwitter, BsPinterest, BsLinkedin } from 'react-icons/bs'
import { Field, FormikErrors, FormikTouched } from 'formik'

type FormFieldsName = {
    facebook: string
    twitter: string
    pinterest: string
    linkedIn: string
}

type SocialLinkFormProps = {
    touched: FormikTouched<FormFieldsName>
    errors: FormikErrors<FormFieldsName>
}

const SocialLinkForm = (props: SocialLinkFormProps) => {
    const { touched, errors } = props
    const videoId: string = "0Qa71ZrIonY";

    return (
        <>
        <div style={{ maxWidth: '60%', margin: 'auto', borderRadius: '8px', overflow: 'hidden' }}>
        <div
            style={{
            position: 'relative',
            paddingTop: '177.77%', // 16:9 aspect ratio (16 / 9 * 100)
            height: 0,
            borderRadius: '8px', // Adding border radius
            overflow: 'hidden', // Hiding overflow content
            }}
        >
            <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '8px', // Matching border radius for the iframe
            }}
            />
        </div>
        </div>
            {/* <FormItem
                label="Facebook link"
                invalid={errors.facebook && touched.facebook}
                errorMessage={errors.facebook}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="facebook"
                    placeholder="URL"
                    component={Input}
                    prefix={<BsFacebook className="text-xl text-[#1773ea]" />}
                />
            </FormItem>
            <FormItem
                label="Twitter link"
                invalid={errors.twitter && touched.twitter}
                errorMessage={errors.twitter}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="twitter"
                    placeholder="URL"
                    component={Input}
                    prefix={<BsTwitter className="text-xl text-[#1da1f3]" />}
                />
            </FormItem>
            <FormItem
                label="Pinterest link"
                invalid={errors.pinterest && touched.pinterest}
                errorMessage={errors.pinterest}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="pinterest"
                    placeholder="URL"
                    component={Input}
                    prefix={<BsPinterest className="text-xl text-[#df0018]" />}
                />
            </FormItem>
            <FormItem
                label="LinkedIn link"
                invalid={errors.linkedIn && touched.linkedIn}
                errorMessage={errors.linkedIn}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="linkedIn"
                    placeholder="URL"
                    component={Input}
                    prefix={<BsLinkedin className="text-xl text-[#0077b5]" />}
                />
            </FormItem> */}
        </>
    )
}

export default SocialLinkForm