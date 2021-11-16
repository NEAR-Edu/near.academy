import * as React from 'react'
import {FormSevenChapterWrapper} from './FormSevenChapter.style'
import {ChangeEvent, SyntheticEvent, useState} from "react";
import {
    FormInputs,
    getErrorMessage,
    getInputStatus,
    updateFormFromBlur,
    updateFormFromChange, updateFormFromSubmit
} from "../../../helpers/form";
import {SevenChapterForm} from "../../../shared/meme/SevenChapterForm";
import {InputField} from "../Form/InputField/Input.controller";
import {Button} from "../Button/Button.controller";
export const FormSevenChapterView = () => {

    const [form, setForm] = useState<FormInputs>({
        meme: { value: '' },
        title: { value: '' },
        url: { value: '' },
        category: { value: '' },
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const updatedForm = updateFormFromChange(e, form, SevenChapterForm)
        setForm(updatedForm)
    }

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const updatedForm = updateFormFromBlur(e, form)
        console.log(updatedForm)
        setForm(updatedForm)
    }

    const handleSubmit = (event: SyntheticEvent) => {
        const updatedForm = updateFormFromSubmit(event, form, SevenChapterForm)
        console.log(updatedForm)
        if (!updatedForm.meme.error && !updatedForm.title.error && !updatedForm.url.error && !updatedForm.category.error)
            console.log('success')
        else setForm(updatedForm)
    }

    return (
        <FormSevenChapterWrapper>
            <form onSubmit={handleSubmit}>
                <InputField
                    name="meme"
                    type="text"
                    onChange={handleChange}
                    value={form.meme.value}
                    onBlur={handleBlur}
                    inputStatus={getInputStatus(form.meme)}
                    errorMessage={getErrorMessage(form.meme)}
                />
                <InputField
                    name="title"
                    type="text"
                    onChange={handleChange}
                    value={form.title.value}
                    onBlur={handleBlur}
                    inputStatus={getInputStatus(form.title)}
                    errorMessage={getErrorMessage(form.title)}
                />
                <InputField
                    name="url"
                    type="text"
                    onChange={handleChange}
                    value={form.url.value}
                    onBlur={handleBlur}
                    inputStatus={getInputStatus(form.url)}
                    errorMessage={getErrorMessage(form.url)}
                />
                <InputField
                    name="category"
                    type="number"
                    onChange={handleChange}
                    value={form.category.value}
                    onBlur={handleBlur}
                    inputStatus={getInputStatus(form.category)}
                    errorMessage={getErrorMessage(form.category)}
                />
                <Button type="submit" text="Submit" />
            </form>
        </FormSevenChapterWrapper>
    )
}
