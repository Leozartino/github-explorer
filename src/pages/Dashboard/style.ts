import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  margin-top: 70px;
  font-size: 40px;
  max-width: 450px;
  line-height: 50px;
  color: #3a3a3a;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 200px;
    height: 70px;
    background: #76bfd8;
    border-radius: 0 5px 5px 0;
    border: 0;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#76bfd8')};
    }
  }
`;

export const ListRepositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 18px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 5px;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    #container-info-repository {
      margin-left: 16px;
      strong {
        font-size: 18px;
        color: #3d3d4d;
      }

      p {
        font-size: 15px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
