import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from '../../pages/Home'
import bookmark from '../../pages/Bookmark'


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={home} />
                <Route path="/bookmark" component={bookmark} />

            </Switch>
        </Router>
    );
}
export default App;