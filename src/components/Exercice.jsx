import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sentence from './Sentence';

const Exercice = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const exerciceId = id - 1;
    const queryParameters = new URLSearchParams(window.location.search);
    const exerciceName = queryParameters.get("name");

    const [score, setScore] = useState(0);

    const ex1 = [
        {
            id: 1,
            sentence: "Elle est _ à la maison toute la journée.",
            good: "restée",
            bad: "resté"
        },
        {
            id: 2,
            sentence: "Ils sont _ à la pêche.",
            good: "allés",
            bad: "allées"
        },
        {
            id: 3,
            sentence: "Elle est _ coucher tôt.",
            good: "allée",
            bad: "allé"
        },
        {
            id: 4,
            sentence: "Elle a _ des pâtes.",
            good: "mangé",
            bad: "mangée"
        },
        {
            id: 5,
            sentence: "Ils ont _ mes clés.",
            good: "retrouvé",
            bad: "retrouvés"
        }
    ]

    const ex2 = [
        {
            id: 1,
            sentence: "Les enfants _ dans la cour.",
            good: "jouent",
            bad: "joue"
        },
        {
            id: 2,
            sentence: "_-tu rangé tes affaires ?",
            good: "As",
            bad: "A"
        },
        {
            id: 3,
            sentence: "Tu _ partir si tu veux.",
            good: "peux",
            bad: "peu"
        },
        {
            id: 4,
            sentence: "Elle aime _ dans la forêt.",
            good: "marcher",
            bad: "marchée"
        },
        {
            id: 5,
            sentence: "Il _ déjà midi.",
            good: "est",
            bad: "es"
        }
    ]

    const exerciceList = [ex1, ex2];

    return (
        <>
            <h3>{exerciceName}</h3>
            <div>
                {
                    exerciceList[exerciceId] && exerciceList[exerciceId].map((exercice) => (
                        <Sentence key={exercice.id} exercice={exercice} score={score} setScore={setScore} />                        
                    ))
                }
            </div>
            <h4>Score : {score}/{exerciceList[exerciceId].length}</h4>
            <br/>
            <button type='button' className='btn btn-primary' onClick={() => navigate(-1)}>« Retour</button>
        </>

    )
}

export default Exercice