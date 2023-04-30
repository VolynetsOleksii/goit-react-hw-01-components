import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.shadow};
  margin: 50px auto 30px;
  text-align: center;
  background-color: ${p => p.theme.colors.gray};
`;
export const TableHead = styled.thead`
  background-color: ${props => props.theme.colors.lightBlue};
  color: ${props => props.theme.colors.white};
  height: 30px;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.gray};
`;

export const TableRow = styled.tr`
  height: 30px;
  text-transform: capitalize;
  background-color: ${props =>
    props.even ? props.theme.colors.white : props.theme.colors.lightGray};
`;
