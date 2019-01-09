import React, {Component} from 'react';
import './sytle/App.css';
import Form from './components/form'
import List from './components/list';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="Todo-App">
                        <Form/>
                    </div>
                    <div className="table-content">
                        <List/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
