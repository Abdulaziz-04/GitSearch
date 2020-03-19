import React, { useState, useContext } from 'react';
import gitContext from '../Components/contextAPI/github/GitsearchContext';
import AlertContext from './contextAPI/AlertcontextAPI/AlertContext';

const Search = () => {
    const ac = useContext(AlertContext);
    const gc = useContext(gitContext);
    const [text, setText] = useState('');
    const onChange = e => {
        return setText(e.target.value);
    }; //on change event is required while inputting text
    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            ac.setAlert(' Please Enter Something');
        } else {
            gc.searchUsers(text);
            ac.remAlert();
            setText('');
        }
    }; //on submit event while pressing the submit button
    return (
        //onSubmit and onChange event are defined here as follows
        //value just takes note of before and after the onChange event
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input
                    type='text'
                    name='text'
                    placeholder='Search Users....'
                    value={text}
                    onChange={onChange}
                />
                <input
                    type='submit'
                    value='Search'
                    className='btn btn-dark btn-block'
                />
            </form>
            {gc.users.length > 0 && (
                <button
                    className='btn btn-light btn-block'
                    onClick={gc.clearUsers}
                >
                    Clear
                </button>
            )}
        </div> //These props method are called down in app.js so the functions are define there
    );
};

//ONE SAMPLE FOR FUNCTION BASED APPROACH TOWARDS APP.JS
/*const Search = ({ setAlert, searchUsers, clearUsers, showClear }) => {
    const [text, setText] = useState();
    const onChange = e => {
        return setText(e.target.value);
    }; //on change event is required while inputting text
    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert(' Please Enter Something');
        } else {
            searchUsers(text);
            setText('');
        }
    }; //on submit event while pressing the submit button
    return (
        //onSubmit and onChange event are defined here as follows
        //value just takes note of before and after the onChange event
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input
                    type='text'
                    name='text'
                    placeholder='Search Users....'
                    value={text}
                    onChange={onChange}
                />
                <input
                    type='submit'
                    value='Search'
                    className='btn btn-dark btn-block'
                />
            </form>
            {showClear && (
                <button
                    className='btn btn-light btn-block'
                    onClick={clearUsers}
                >
                    Clear
                </button>
            )}
        </div> //These props method are called down in app.js so the functions are define there
    );
};
Search.propTypes = {
    searchUsers:PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired //This event is involved within the onsubmit event
};




-------------------------------------------------------------------------------------------------------------------------------------------------
/*class Search extends Component {
    state = {
        text: ''
    }; //state stores the text input value
    onChange = e => {
        return this.setState({ text: e.target.value });
    }; //on change event is required while inputting text
    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert(' Please Enter Something');
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    }; //on submit event while pressing the submit button
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired //This event is involved within the onsubmit event
    };
    render() {
        return (
            //onSubmit and onChange event are defined here as follows
            //value just takes note of before and after the onChange event
            <div>
                <form onSubmit={this.onSubmit} className='form'>
                    <input
                        type='text'
                        name='text'
                        placeholder='Search Users....'
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input
                        type='submit'
                        value='Search'
                        className='btn btn-dark btn-block'
                    />
                </form>
                {this.props.showClear && (
                    <button
                        className='btn btn-light btn-block'
                        onClick={this.props.clearUsers}
                    >
                        Clear
                    </button>
                )}
            </div> //These props method are called down in app.js so the functions are define there
        );
    }
}*/
//NORMAL CLASS VERSION
//NOW IN THE USESTATE VERSION ALLL THE REQUIRED PROPS ARE PASSED IN AS ARGUMENTS AND THE REST ARE DEFINED AS FUNCTIONS

export default Search;
