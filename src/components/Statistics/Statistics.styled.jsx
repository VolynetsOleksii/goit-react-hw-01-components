import styled from 'styled-components';

export const StatSection = styled.section`
  display: block;
  width: fit-content;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto 50px;
  box-shadow: ${props => props.theme.shadows.shadow};
`;

export const Title = styled.h2`
  display: block;
  padding: 20px 0;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.white};
  margin: 0px;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin-bottom: 0px;
`;

export const ListItem = styled.li`
  display: inline-flex;
  flex-direction: column;
  color: ${props => props.theme.colors.white};
  background-color: ${() => getRandomHexColor()};
  width: 50px;
  padding: 10px;
  height: 40px;
  text-align: center;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Span = styled.span`
  font-size: 20px;
`;
