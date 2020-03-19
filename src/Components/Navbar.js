import React from 'react'; //Use {Component} if using class style
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//Link is substitute to anchor tag as it retains the page flow

/*class Navbar extends Component {
    static defaultProps = {
        title: ' Something that finds something!'
    }; //If no values are passed in the app.js we can use default values by this medthod
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }; //Handler for invalid input of data type
    render() {
        return (
            <nav className='navbar bg-success'>
                <h1>
                    <i className={this.props.icon}></i>
                    {this.props.title}
                </h1>
            </nav>
        ); //Acesssing the passed values
    }
}*/
//CLASS BASED APPROACH

const Navbar = props => {
    return (
        <nav className='navbar bg-success'>
            <h1>
                <i className={props.icon}></i>
                {props.title}
            </h1>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </ul>
        </nav>
    );
};
Navbar.static = {
    title: ' Something that finds something!'
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;
