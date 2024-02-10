import React, { useState } from 'react'

const Options = ({ good, option, disabled, setDisabled, setDisplay1, setDisplay2, score, setScore }) => {


    function handleClickOption(e, good, option) {
        //console.log(e, good, option);
        if (option === good) {
            console.log("ok");
            e.target.className = "btn btn-success";
            setScore(score + 1);
        } else {
            e.target.className = "btn btn-danger";
        }
        setDisabled(true);
        setDisplay1('none');
        setDisplay2('block');
    }

    return (
        <>
            <button
                disabled={disabled}
                onClick={(e) => handleClickOption(e, good, option)}
                type='button'
                className='btn btn-secondary'>{option}</button>
        </>
    )
}

export default Options