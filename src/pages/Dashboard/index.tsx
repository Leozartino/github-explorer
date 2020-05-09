import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/github-arrow.svg';
import { Title, Form, ListRepositories } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="github-arrow" />
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input type="text" placeholder="Informe o repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <ListRepositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/38565099?s=460&u=5e68e27f8b2b3506b9468720d570cf0265b4207f&v=4"
            alt=""
          />
          <div id="container-info-repository">
            <strong>leozartino/js</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/38565099?s=460&u=5e68e27f8b2b3506b9468720d570cf0265b4207f&v=4"
            alt=""
          />
          <div id="container-info-repository">
            <strong>leozartino/js</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/38565099?s=460&u=5e68e27f8b2b3506b9468720d570cf0265b4207f&v=4"
            alt=""
          />
          <div id="container-info-repository">
            <strong>leozartino/js</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </ListRepositories>
    </>
  );
};

export default Dashboard;
