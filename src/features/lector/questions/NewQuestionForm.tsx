import React from 'react';
import { useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Question from "./question.model";

import { useAppDispatch } from '../../../app/hooks';
import { addQuestion } from './questionsSlice';

const newQuestion: Question = Object.freeze({ question: '', max_score: 2 });

const NewQuestionForm = () => {

    const dispatch = useAppDispatch();
   
    const [currValue, setState] = useState(newQuestion);

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (currValue.question.length > 0) {
            dispatch(addQuestion(currValue));
            setState(newQuestion);
        }
    }

    const onChangeQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({...currValue, question: event.target.value });
    }

    const onChangeMark = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({...currValue, max_score: Number(event.target.value) });
    }
    
    return (
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => onSubmitHandler(event)}>
            <TextField type="text" placeholder='question' onChange={onChangeQuestion} value={currValue.question}/>
            <TextField type="number" onChange={onChangeMark} value={currValue.max_score} InputLabelProps={{ shrink: true }}/>
            <Button type='submit' variant="outlined" size="small" >add</Button>
        </form>
    );
}

export default NewQuestionForm;
