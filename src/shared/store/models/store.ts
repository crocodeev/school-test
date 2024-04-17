import { TQuestions } from "src/entities/question/question";

export type TTimerStore = {
    secondsLeft: number,
    initial: number
}

export type TQuiz = {
    current: number,
    questions: TQuestions[],
    answers: (string | string[])[],
    timer: TTimerStore,
    isCompleted: boolean,
    isStarted: boolean
}