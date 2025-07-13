import Jokes from "./components/Jokes.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {JokeAttributes} from "./interfaces/JokeAttributes.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: #d6d093;
    min-height: 100vh;
`;

const Heading = styled.h1`
    padding: 1%;
    text-align: center;
    font-size: calc(2px * 1px);
`;

export default function App(){
    const [jokes, setJokes] = useState<JokeAttributes[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://v2.jokeapi.dev/joke/Any?amount=9&safe-mode");
            const {jokes} : {jokes: JokeAttributes[]} = await rawData.json();
            setJokes(jokes);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return(
        <ParentDiv>
            <Heading>Jokes List</Heading>
            <Jokes jokes={jokes}/>
        </ParentDiv>
    )
}
