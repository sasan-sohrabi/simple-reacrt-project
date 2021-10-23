import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header'
import Notes from './pages/NotesListPages'
import Note from './pages/NotePage'

function App() {

    return (
        <Router>
            <div className="container dark">
                <div className="app">
                    <Header/>
                    <Route path="/" exact component={Notes}/>
                    <Route path="/note/:id" component={Note}/>
                </div>
            </div>
        </Router>
    );
}

export default App;