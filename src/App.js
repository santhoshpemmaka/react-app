// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// const createPage = () => {
//     return(
//     <div>reached to the createPage</div>
//     )
// }

// const profilepage = () => (
//     <div> reached to the profilepage</div>
// )

// const editpage = () => (
//     <div> reached to the editpage</div>
// )

// const defaultPage =()  => (
//     <div>404!</div>
// )
// const Header = () => (
//     <div>
//         <h1>Expensify App</h1>
//         <ul>
//             <li> <Link to="/">createPage</Link> </li>
//             <li> <Link to="/profile">Profilepage</Link></li>
//             <li><Link to='/edit'>Editpage</Link></li>
//         </ul>
//     </div>
// )
// class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 <Router>
//                 <div>
//                     <Header />
//                     <Switch>
//                         <Route path='/' component = {createPage} exact={true} />
//                         <Route path='/profile' component = {profilepage} />
//                         <Route path='/edit' component = {editpage} />
//                         <Route component = {defaultPage} />
//                     </Switch>
//                 </div>
//                 </Router>
//             </div>
//         );
//     }
// }

// export default App;


// import React,{Component} from 'react';
// import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
// import Home from './component/home';
// import Portfolio from './component/portfolio';
// import Contact from './component/conatact';
// import NavLink from './component/navLink';

// class App extends Component{
//     render(){
//         return(
//             <div>
//                 <Router>
//                     <Link to="/contact">Home</Link>
//                     <NavLink/>
//                     <Switch>
//                         <Route path="/" component={Home} exact={true} />
//                         <Route path="/portfolio" component={Portfolio} />
//                         <Route path='/contact' component={Contact} />                    
//                     </Switch>
                
                
//                 </Router>
            
            
//             </div>
//         )
//     }
// }

import React from 'react';
import Redux from './redux/redux'

class App extends React.Component{
    render(){
        return(
            <Redux />
        );
    }
}


export default App;
