import React, { Fragment } from 'react';
import './App.css'; //basic CSS FILE
import Navbar from './Components/Navbar'; //Component file
import Users from './Components/Users';
import Search from './Components/Search';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/About';
import Single from './Components/Single';
import GitsearchState from './Components/contextAPI/github/GitsearchState';
import AlertState from './Components/contextAPI/AlertcontextAPI/AlertState';
import Exist from './Components/Exist';
//Deployment is done using netlify and client id is obtained through OAuth

const App = () => {
    return (
        <GitsearchState>
            <AlertState>
                <Router>
                    <div>
                        <Navbar title=' Git Finder' icon='fab fa-github' />
                        <div className='container'>
                            <Alert />
                            <Switch>
                                <Route
                                    exact
                                    path='/'
                                    render={props => (
                                        <Fragment>
                                            <Search />
                                            <Users />
                                        </Fragment>
                                    )}
                                />
                                <Route exact path='/about' component={About} />
                                <Route
                                    exact
                                    path='/user/:login'
                                    component={Single}
                                />
                                <Route component={Exist} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GitsearchState>
    );
};

//The BRWOSER-ROUTER prepares script to be launched by html5+
//The Route is used to specify path along with functions(render) or with components
//Switch launches the first router among multiple choices if provided

/*class App extends Component {
    //Base CLASS
    render() {
        //Base lifecycle method
        return (
            <div>
                <Navbar title=' Git Finder' icon='fab fa-github' />
                <div className='container'>
                    <Users />
                </div>
            </div>
        );
    } //Pass values in the nvabar which are accessed in navbar.js
}*/
//Class based Approach

/*Normal working procedure can be defined as follows
Initially an element of id root is launched with default html followd by the  App.js and css files 
So if we create a function, we pass it here alongwith another file where  THE FUNCTION ITSELF OR PARAMETERS are passed and used
*/

/*class App extends Component {
    state = {
        users: [], //An array of users
        user: {}, //Single defined user object
        repos: [],
        loading: false,
        alert: null
    };
    async componentDidMount() {
        this.setState({ loading: true });
        const res = await axios.get('http://api.github.com/users');
        this.setState({ loading: false, users: res.data });
    }
    searchUsers = async text => {
        this.setState({ loading: true });
        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}`
        );
        this.setState({ users: res.data.items, loading: false });
    }; //Pass this function as a property and then call it using this.props
    clearUsers = () => {
        this.setState({ users: [], text: '' });
    };
    setAlert = msg => {
        this.setState({ alert: { msg } });
        setTimeout(() => {
            this.setState({ alert: null });
        }, 3000);
    }; //The set alert function takes the alert object
    getUser = async username => {
        this.setState({ loading: true });
        const res = await axios.get(`https://api.github.com/users/${username}`);
        this.setState({ user: res.data, loading: false });
    };
    getRepos = async username => {
        this.setState({ loading: true });
        const res = await axios.get(
            `https://api.github.com/users/${username}/repos?per_page=7&sort=created:asc`
        );
        this.setState({ repos: res.data, loading: false });
    };
    render() {
        return (
            <Router>
                <div>
                    <Navbar title=' Git Finder' icon='fab fa-github' />
                    <div className='container'>
                        <Alert
                            alert={this.state.alert}
                            clearAlert={this.clearAlert}
                        />
                        <Switch>
                            <Route
                                exact
                                path='/'
                                render={props => (
                                    <Fragment>
                                        <Search
                                            searchUsers={this.searchUsers}
                                            clearUsers={this.clearUsers}
                                            showClear={
                                                this.state.users.length > 0
                                                    ? true
                                                    : false
                                            }
                                            setAlert={this.setAlert}
                                        />
                                        <Users
                                            loading={this.state.loading}
                                            users={this.state.users}
                                        />
                                    </Fragment>
                                )}
                            />
                            <Route exact path='/about' component={About} />
                            <Route
                                exact
                                path='/user/:login'
                                render={props => (
                                    <Single
                                        {...props}
                                        getUser={this.getUser}
                                        user={this.state.user}
                                        repos={this.state.repos}
                                        getRepos={this.getRepos}
                                    />
                                )}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}*/

//-------------------------------------USING USEFFECT/USESTATE HOOKS WITH FUNCTIONS-----------------------------------------------//
/*const App = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setL] = useState(false);
    const [alert, setAl] = useState(null);

    const searchUsers = async text => {
        setL(true);
        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}`
        );
        setL(false);
        setUsers(res.data.items);
    }; //Pass this function as a property and then call it using this.props
    const clearUsers = () => {
        setUsers([]);
    };
    const setAlert = msg => {
        setAl(msg);
        setTimeout(() => {
            setAl(null);
        }, 3000);
    }; //The set alert function takes the alert object
    const getUser = async username => {
        setL(true);
        const res = await axios.get(`https://api.github.com/users/${username}`);
        setUser(res.data);
        setL(false);
    };
    const getRepos = async username => {
        setL(true);
        const res = await axios.get(
            `https://api.github.com/users/${username}/repos?per_page=7&sort=created:asc`
        );
        setRepos(res.data);
        setL(false);
    };
    return (
        <Router>
            <div>
                <Navbar title=' Git Finder' icon='fab fa-github' />
                <div className='container'>
                    <Alert alert={alert} />
                    <Switch>
                        <Route
                            exact
                            path='/'
                            render={props => (
                                <Fragment>
                                    <Search
                                        searchUsers={searchUsers} ----------------------------CALLED USING PROPS.SEARCHUSERS
                                        clearUsers={clearUsers}-------------------------FUNCTION.PROPTYPES FOR proptypes
                                        showClear={
                                            users.length > 0 ? true : false
                                        }
                                        setAlert={setAlert}
                                    />
                                    <Users loading={loading} users={users} />--------------------TO PASS ON DATA OF STATE
                                </Fragment>
                            )}
                        />
                        <Route exact path='/about' component={About} />
                        <Route
                            exact
                            path='/user/:login'
                            render={props => (
                                <Single
                                    {...props}
                                    getUser={getUser}
                                    user={user}
                                    repos={repos}
                                    getRepos={getRepos}
                                />
                            )}
                        />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};*/

export default App;
