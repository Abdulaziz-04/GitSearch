import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from './Spinner/Spin';
import { Link } from 'react-router-dom';
import Repos from './Repos';
import gitContext from './contextAPI/github/GitsearchContext';

//useState is used to replace the functioning of state while useEffect is used to replace functioning of ComponentDidMount(use[] brackets)
const Single = ({ match }) => {
    const gc = useContext(gitContext);
    const { getRepos, getUser, user, repos, loading } = gc;
    useEffect(() => {
        getUser(match.params.login);
        getRepos(match.params.login);
        //eslint-disable-next-line
    }, []);
    //UseEffect implies on the activation of particular function/state

    const {
        name,
        avatar_url,
        bio,
        location,
        html_url,
        following,
        followers,
        blog,
        public_repos,
        public_gists,
        hireable,
        company,
        login
    } = user;
    if (loading) return <Spinner />;
    return (
        <Fragment>
            <Link to='/' className='btn btn-light'>
                Back to Search
            </Link>
            Hireable:{' '}
            {hireable ? (
                <i className='fas fa-check text-success '></i>
            ) : (
                <i className='fas fa-times-circle text-danger'></i>
            )}
            <div className='card grid-2'>
                <div className='text-center'>
                    <img
                        src={avatar_url}
                        alt='Avatar'
                        className='round-img'
                        style={{ width: '150px' }}
                    />

                    <h1>{name}</h1>
                    <p>Location : {location}</p>
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio :</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className='btn btn-dark my-1'>
                        Go to Profile
                    </a>
                    <ul>
                        <li>
                            <Fragment>
                                <h1>Not Found!</h1>
                                <p className='lead'>Page doesn't exist</p>
                            </Fragment>
                            <Fragment>
                                <strong>Username : {login}</strong>
                            </Fragment>
                        </li>
                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Blog : {blog}</strong>
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Company : {company}</strong>
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='card text-center'>
                <div className='badge badge-primary'>
                    Followers : {followers}
                </div>
                <div className='badge badge-success'>
                    Following : {following}
                </div>
                <div className='badge badge-light'>
                    Public Repos: {public_repos}
                </div>
                <div className='badge badge-dark'>
                    Public Gists : {public_gists}
                </div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    );
};

export default Single;
