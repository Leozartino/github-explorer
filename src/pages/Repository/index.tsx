import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Header, RepositoryInfo, Issue } from './style';
import logo from '../../assets/github-arrow.svg';

interface RepositoryParams {
  nameRepository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} /> Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="img" />
          <div>
            <strong />
            <p />
          </div>
        </header>
        <ul />
      </RepositoryInfo>

      <Issue>
        <Link to="/">
          <div>
            <strong />
            <p />
          </div>
        </Link>
      </Issue>
    </>
  );
};

export default Repository;
