import { TQuestions } from "src/entities/question/question"
import { EQuestionType } from "src/entities/question/question"


export const questions: TQuestions[] = [
    {
        type: EQuestionType.SHORT_TEXT,
        message: "Кто обитает на дне океана?"
    },
    {
        type: EQuestionType.LONG_TEXT,
        message: "Как я провёл лето?"
    },
    {
        type: EQuestionType.SELECT,
        message: "Кто убил Лору Палмер?",
        answer: ["Лиланд Палмер", "Дама с поленом", "Лео Джонсон", "Бенджамин Хорн"]
        
    },
    {
        type: EQuestionType.RADIO_BUTTON,
        message: "Если кит на слона влезет, кто кого сборет?",
        answer: ["Кит", "Слон"]
    },
    {
        type: EQuestionType.CHECKBOX,
        message: "Отметьте водоёмы, которые на самом деле не являются морями?",
        answer: ["Мёртвое море", "Каспийское Море", "Чёрное Море", "Мраморное Море"]
    }
]