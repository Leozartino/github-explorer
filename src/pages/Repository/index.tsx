import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Header, RepositoryInfo, Issue } from './style';
import logo from '../../assets/github-arrow.svg';
import api from '../../services/apiClient';

interface RepositoryParams {
  nameRepository: string;
}

interface RepositoryInfo {
  full_name: string;
  description: string;
  startgazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  title: string;
  id: number;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<RepositoryInfo | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.nameRepository}`).then((response) => {
      setRepository(response.data);
    });
    api.get(`repos/${params.nameRepository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.nameRepository]);
  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} /> Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.startgazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Open Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issue>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div id="container-info-repository">
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
          </a>
        ))}
      </Issue>
    </>
  );
};

export default Repository;
