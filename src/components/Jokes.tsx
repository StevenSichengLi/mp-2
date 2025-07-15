import styled from "styled-components";
import type {JokeAttributes} from "../interfaces/JokeAttributes.ts";
import {useState} from "react";


const AllJokesDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Category = styled.h2`
    font-family: Papyrus, fantasy;
    font-style: italic;
    font-variant: small-caps;
    font-weight: bold;
    text-align: center;
    padding-bottom: 2%
`;

const SingleJokeDiv = styled.div<{ type: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    //each box is fixed size so everything lines up beautifully
    //stays fixed relative to the screen size
    flex-basis: 30%;
    flex-grow: 0;
    flex-shrink: 0;
    
    min-height: 20vw;
    max-width: 30%;
    padding: 2%;
    margin: 1%;

    background-color: ${(props) =>
            props.type === "twopart" ? "black" : "lemonchiffon"};  // e.g. light blue vs dark gray
    color: ${(props) =>
            props.type === "twopart" ? "white" : "black"};
    
    font-family: Papyrus, fantasy;
    font-style: italic;
    font-variant: small-caps;
    font-weight: bold;
    text-align: center;

    // allows the text to wrap around if it is too long
    word-break: break-word;
    overflow-wrap: break-word;
    overflow: auto;
    white-space: normal;
`;


const Button = styled.button`
    background-color: lightslategrey;
    font-size: calc(14px + 6px);
    font-family: Papyrus, fantasy;
    font-style: italic;
    font-variant: small-caps;
    font-weight: bold;
;`

const Punchline = styled.p`
    background-color: lightslategrey;
    padding: 2%;
;`

//takes the input string and replaces the designated chars with an empty string
// ^  basically just tells it to look for \ at the beginnign of the string and replace it
const clean = (s: string | undefined) => s?.replace(/^\\/, "");


function JokeItem({joke}: { joke: JokeAttributes }) {
    const [show, setShow] = useState(false);

    return (
        <SingleJokeDiv type={joke.type}>
            <Category>Category: {joke.category}</Category>
            {joke.type === "twopart" ? (
                <>
                    <p>{clean(joke.setup)}</p>
                    {!show ? (
                        <Button onClick={() => setShow(true)}>Click to see punchline</Button>
                    ) : (
                        <Punchline>{joke.delivery}</Punchline>
                    )}
                </>
            ) : (
                <p>{joke.joke}</p>
            )}
        </SingleJokeDiv>
    );
}

export default function JokeList(props: { jokes: JokeAttributes[] }) {
    return (
        <AllJokesDiv>
            {props.jokes.map((joke) => (
                <JokeItem key={joke.id} joke={joke}/>
            ))}
        </AllJokesDiv>
    );
}


