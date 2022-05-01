import {Provider} from "react-redux";
import {store} from "./store";
import Counter from './components/Counter'
import Btns from "./components/Btns";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Redux Middleware</h1>
                <Counter />
                <Btns />
            </div>
        </Provider>
    );
}

export default App;
