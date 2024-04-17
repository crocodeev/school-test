export enum EQuestionType {
    SHORT_TEXT,
    LONG_TEXT,
    RADIO_BUTTON,
    SELECT,
    CHECKBOX
}

interface IQuestion {
    message: string,
}

export interface IShortQuestion extends IQuestion{
    type: EQuestionType.SHORT_TEXT
}

export interface ILongQuestion extends IQuestion{
    type: EQuestionType.LONG_TEXT
}

export interface IRadioButtonQuestion extends IQuestion{
    type: EQuestionType.RADIO_BUTTON
    answer: string[]
}

export interface ISelectQuestion extends IQuestion{
    type: EQuestionType.SELECT
    answer: string[]
}

export interface ICheckboxQuestion extends IQuestion{
    type: EQuestionType.CHECKBOX
    answer: string[]
}

export type TQuestions = IShortQuestion | ILongQuestion | IRadioButtonQuestion | ISelectQuestion | ICheckboxQuestion



