import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
`;

export const ActorCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ebebeb;
    border: 1px solid grey;
    width: 200px;
    margin-bottom: 14px;
    padding: 8px;
`;

export const Text = styled.p`
    margin: 0 0 8px 0;
`;