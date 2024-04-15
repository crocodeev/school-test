import { PayloadAction, addListener, configureStore, createListenerMiddleware, createSlice } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { persistStore, 
        persistReducer,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


interface IQuestion {
    message: string
}

type TTimerStore = {
    secondsLeft: number,
    initial: number
}

type TQuiz = {
    current: number,
    questions: IQuestion[],
    answers: any[],
    timer: TTimerStore,
    isCompleted: boolean,
    isStarted: boolean
}

const initialState: TQuiz = {
    current: 0,
    questions: [{
        message: "This"
    },
    {
        message: "Is"
    },
    {
        message: "Question"
    }],
    answers: [],
    timer: {
        secondsLeft: 70,
        initial: 70
    },
    isCompleted: false,
    isStarted: false,
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        next (state) {
            if(state.current === state.questions.length - 1){
                state.isCompleted = true
            }
            state.current++
        },
        setTime (state, action: PayloadAction<number>) {
            state.timer.secondsLeft = action.payload
        },
        setCompleted (state) {
            state.isCompleted = true
        },
        setStarted (state) {
            state.isStarted = true
        }
    }
})

const persistConfig = {
    key: 'quiz',
    storage
}

const persistedReducer = persistReducer(persistConfig, quizSlice.reducer)

export const { next, setTime, setCompleted, setStarted } = quizSlice.actions

const listenerMiddleware = createListenerMiddleware()

const store = configureStore({
    reducer: {
        quiz: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).prepend(listenerMiddleware.middleware),
})

export default store

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

const startAppListening = listenerMiddleware.startListening.withTypes<RootState,AppDispatch
>()

startAppListening({
    predicate: (action, currentState, previousState) => {

        return currentState.quiz.timer.secondsLeft <= 0 ? true : false
        
    },
    effect: async (action, listenerAPI) => {
        
        listenerAPI.unsubscribe()

        listenerAPI.dispatch(setCompleted())
        
    }
})

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const persistor = persistStore(store)
