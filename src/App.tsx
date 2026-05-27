import './App.css';
import {useState} from "react";

export const App = () => {

    let [a, setA] = useState(1)

    const onClickHendler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickZero = () => {
        setA(a=0)
        console.log(a)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHendler}>number</button>
            <button onClick={onClickZero}>0</button>

        </div>
    )
}
