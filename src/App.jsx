import Hello from "./own_components/Hello";
import Sign from "./own_components/Sign";

const App=()=>{
return (
    <div>
        <h1>Greetings :</h1>
        <Hello/>
        <Sign/>
        <Hello/>
    </div>
)
}
export default App;