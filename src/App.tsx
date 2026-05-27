import './App.css';
import {Button} from "./components/Button.tsx";

export const App = ()=> {

    const button1Foo = (subscriber:string, age:number, address:string) => {
        console.log(subscriber, age, address)
    }

    const button2Foo = (subscriber:string) => {
        console.log(subscriber)
    }

    const button3Foo = () => {
        console.log("Im stupid button")
    }

    return (
        <div className="App">
            <Button title={"MyYouTubeChanel-1"} callBack={()=>button1Foo("Im Vasya", 21, "Mogilyov")}/>
            <Button title={"MyYouTubeChanel-2"} callBack={()=>button2Foo("Im Ivan")}/>
            <Button title={"Stupid button"} callBack={button3Foo}/>
        </div>
    )
}
