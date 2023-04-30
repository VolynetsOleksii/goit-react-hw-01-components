import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  width: fit-content;
  overflow: hidden;
  padding: 0px;
  box-shadow: ${props => props.theme.shadows.shadow};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px 30px;
`;

export const Online = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
  border-radius: 50%;
  margin-right: 20px;
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 5px;
  margin-right: 40px;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: bold;
`;
