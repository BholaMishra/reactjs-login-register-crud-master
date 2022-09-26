import React from 'react';
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
import Testimonial from './Testimonial/Testimonial';
import Form from './pages/form';
import Tpalert from './pages/tpalert'
import Tpalerttable from './pages/tpalerttable'
import Tpalertserves from './pages/tpalertserves'
import Tpalertedit from './pages/tpalertedit'
import Customize from './pages/customize'
import Currentdate from './pages/currentdate'


function App() {
    // class App extend component{
    // render() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/epp' component={Epp} />
                    <Route path='/eppnewadd' component={Eppnewadd} />
                    <Route path='/eppnewadd1' component={Eppnewadd1} />
                    <Route path='/eppt2' component={Eppt2} />
                    <Route path='/auctionadd' component={Auctionadd} />
                    <Route path='/auction' component={Auction} />
                    <Route path='/auctiont2' component={Auctiont2} />
                    <Route path='/eppadd1' component={Eppadd1} />
                    <Route path='/currentdate' component={Currentdate} />
                    <Route path='/customize' component={Customize} />
                    <Route path='/newaddepp2' component={Newaddepp2} />
                    <Route path='/tpalert' component={Tpalert} />
                    <Route path='/tpalerttable' component={Tpalerttable} />
                    <Route path='/tpalertedit' component={Tpalertedit} />
                    <Route path='/tpalertserves' component={Tpalertserves} />
                    <Route path='/previaus' component={Previaus} />
                    <Route path='/this' component={This} />
                    <Route path='/next' component={Next} />
                    <Route path='/form' component={Form} />
                    <Route path='/testimonial' component={Testimonial} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
}
// }
export default App;
