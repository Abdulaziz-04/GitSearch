import React, { useContext } from 'react';
import Userlayout from './Userlayout';
import Spinner from './Spinner/Spin';
import gitContext from '../Components/contextAPI/github/GitsearchContext';

const Users = () => {
    const gc = useContext(gitContext);
    const { loading, users } = gc;
    /*state = {
        users: [
            {
                id: '1',
                name: 'fabpot',
                avatar:
                    'https://avatars0.githubusercontent.com/u/47313?s=30&v=4',
                profile: 'https://github.com/fabpot'
            },
            {
                id: '2',
                name: 'andrew',
                avatar:
                    'https://avatars3.githubusercontent.com/u/1060?s=30&v=4',
                profile: 'https://github.com/andrew'
            },
            {
                id: '3',
                name: 'egoist',
                avatar:
                    'https://avatars0.githubusercontent.com/u/8784712?s=30&v=4',
                profile: 'https://github.com/egoist'
            }
        ]
    };*/
    //Hardcoded Users
    if (loading) {
        return <Spinner />;
    } else {
        return (
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,1fr)',
                    gridGap: '1rem'
                }}
            >
                {users.map(user => (
                    <Userlayout key={user.id} user={user} />
                ))}
            </div>
        ); //takes the userlayout and the props attribute allows alooping through users
    }
};
export default Users;
