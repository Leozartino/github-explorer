import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/github-arrow.svg';
import { Title, Form, ListRepositories, Error } from './style';
import api from '../../services/apiClient';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Informe: autor/repositorio');
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

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
          <a key={repository.full_name} href="infos">
            <img src={repository.owner.avatar_url} alt="avatar" />
            <div id="container-info-repository">
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </ListRepositories>
    </>
  );
};

export default Dashboard;
