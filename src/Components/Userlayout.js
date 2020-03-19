import React from 'react'; //Use {Component} if using class style
import { Link } from 'react-router-dom';

/*class Userlayout extends Component {
    render() {
        const { avatar, profile, name } = this.props.user;
        return (
            <div className='card text-center'>
                <img
                    src={avatar}
                    className='round-img'
                    style={{ width: '50px' }}
                    alt='Avatar'
                ></img>
                <h3>{name}</h3>
                <div>
                    <a href={profile} className='btn btn-dark btn-sm my-1'>
                        More
                    </a>
                </div>
            </div>
        );
    }
}*/
//CLASS BASED APPROACH

const Userlayout = props => {
    const { login, avatar_url } = props.user;
    return (
        <div className='card text-center'>
            <img
                src={avatar_url}
                className='round-img'
                style={{ width: '50px' }}
                alt='Avatar'
            ></img>
            <h3>{login}</h3>
            <div>
                <Link
                    to={`/user/${login}`}
                    className='btn btn-dark btn-sm my-1'
                >
                    More
                </Link>
            </div>
        </div>
    );
};

export default Userlayout;
