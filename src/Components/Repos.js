import React from 'react';
import Repoitem from './Repoitem';

const Repos = ({ repos }) => {
    return repos.map(repo => <Repoitem key={repo.id} repo={repo} />);
};

export default Repos;
