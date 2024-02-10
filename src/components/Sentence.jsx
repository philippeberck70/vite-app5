import React, { useState } from 'react'
import Options from './Options';

const Sentence = ({ exercice, score, setScore }) => {
    const [disabled, setDisabled] = useState(false);
    const [display1, setDisplay1] = useState('block');
    const [display2, setDisplay2] = useState('none');
    const { id, sentence, good, bad } = exercice;
    const options = shuffleArray([good, bad]);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const sentenceParts = sentence.split('_');

    const goodSentence = sentenceParts[0] + '<strong>' + good + '</strong>' + sentenceParts[1];

    return (
        <div className='alert alert-light mb-3' role='alert'>
            <h5>#{id}</h5>
            <p style={{ display: display1 }}>{sentence.replace('_', '___')}</p>
            <p style={{ display: display2 }}>{sentenceParts[0]}<span className='text-success fw-bold text-decoration-underline'>{good}</span>{sentenceParts[1]}</p>
            <div className="btn-group" role="group">
                {
                    options && options.map((option, index) => (
                        <Options
                            key={index}
                            good={good}
                            option={option}
                            disabled={disabled}
                            setDisabled={setDisabled}
                            setDisplay1={setDisplay1}
                            setDisplay2={setDisplay2}
                            score={score}
                            setScore={setScore} />
                    ))
                }
            </div>
        </div>
    )
}

export default Sentence