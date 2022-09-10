import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Auction from "./pages/auction";
import Auctiont2 from './pages/auctiont2'
import Auctionadd from './pages/auctionadd'
import Epp from "./pages/epp";
import Eppnewadd from "./pages/eppnewadd";
import Eppnewadd1 from "./pages/eppnewadd1";
import Eppt2 from "./pages/eppt2";
import Eppadd1 from "./pages/eppadd1";
import Newaddepp2 from "./pages/newaddepp2";
import Previaus from "./pages/previaus";
import This from "./pages/this";
import Next from "./pages/next";
import Register from "./pages/register";
import NotFound from "./pages/notfound";


class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <Route exact path='/' component={Dashboard} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/epp' component={Epp} />
                        <Route path='/eppnewadd' component={Eppnewadd} />
                        <Route path='/eppnewadd1' component={Eppnewadd1} />
                        <Route path='/eppt2' component={Eppt2} />
                        <Route path='/auctionadd' component={Auctionadd} />
                        <Route path='/auction' component={Auction} />
                        <Route path='/auctiont2' component={Auctiont2} />
                        <Route path='/eppadd1' component={Eppadd1} />
                        <Route path='/newaddepp2' component={Newaddepp2} />
                        <Route path='/previaus' component={Previaus} />
                        <Route path='/this' component={This} />
                        <Route path='/next' component={Next} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
