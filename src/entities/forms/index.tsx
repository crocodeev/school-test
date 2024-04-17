import React, { FunctionComponent } from 'react'
import { FormCheckbox } from './ui/FormCheckbox'
import { FormRadioButton } from './ui/FormRadioButton'
import { FormTextLong } from './ui/FormTextLong'
import { FormTextShort } from './ui/FormTextShort'
import { FormSelect } from './ui/FormSelect'
import { EQuestionType, TQuestions } from '../question/question'


export const CustomForm: FunctionComponent<{ question: TQuestions}> = ({ question }) => {

    switch (question.type) {
        case EQuestionType.SELECT:
            return <FormSelect question={question}/>
        case EQuestionType.CHECKBOX:
            return <FormCheckbox question={question} />
        case EQuestionType.LONG_TEXT:
            return <FormTextLong question={question} />
        case EQuestionType.RADIO_BUTTON:
            return <FormRadioButton question={question} />
        case EQuestionType.SHORT_TEXT:
            return <FormTextShort question={question}/>
        default:
            return(<h1>{"question type not implemented"}</h1>)
    }


}