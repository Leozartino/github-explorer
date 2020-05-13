import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/github-arrow.svg';
import { Title, Form, ListRepositories, Error } from './style';
import api from '../../services/apiClient';

interface RepositoryDTO {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState<string>('');
  const [inputError, setInputError] = useState<string>('');
  const [repositories, setRepositories] = useState<RepositoryDTO[]>(() => {
    const storage = localStorage.getItem('@GitHubExplorer:repositories');
    return storage ? JSON.parse(storage) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GitHubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Informe: autor/repositorio');
      return;
    }
    try {
      const response = await api.get<RepositoryDTO>(`repos/${newRepo}`);

      setRepositories([...repositories, response.data]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Não foi possível encontrar esse repositório.');
    }
  }
  return (
    <>
      <img src={logo} alt="github-arrow" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Informe o repositório"
          onChange={(e) => setNewRepo(e.target.value)}
          value={newRepo}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <ListRepositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img src={repository.owner.avatar_url} alt="avatar" />
            <div id="container-info-repository">
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </ListRepositories>
    </>
  );
};

export default Dashboard;
