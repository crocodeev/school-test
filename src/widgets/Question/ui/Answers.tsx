import React, { FunctionComponent} from "react"
import { useAppSelector } from "src/shared/store/store"
import uuid4 from "uuid4"
import '../styles/styles.css'


export const Answers: FunctionComponent = () => {

    const quiz = useAppSelector(state => state.quiz)

    return(
        <div>
            <h1>Тестирование завершено</h1>
            {
                quiz.questions.length > quiz.answers.length 
                ?
                <p>Время истекло</p>
                :
                null
            }
            <h3>Ваши ответы</h3>
            <ul className="list">
                {
                    quiz.answers.map(item => {

                        if(typeof item === 'string'){
                            return <li className="list__element" key={uuid4()}>{item}</li>
                        }

                        return <li className="list__element" key={uuid4()}>{item.join(", ")}</li>
                    })
                }
            </ul>
        </div>
    )
}