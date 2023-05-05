import styled from 'styled-components';

export const ProfileCard = styled.div`
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  width: 300px;
  margin: 0 auto 80px;
  margin-top: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.shadow};
`;

export const UserImg = styled.img`
  margin-top: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.black};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  margin-bottom: 10px;
  color: ${props => props.theme.colors.gray};
  font-size: 18px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 5px 10px 5px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.lightGray};
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(33.3333% - 3px);
  :not(:first-child) {
    border-left: 1px solid ${props => props.theme.colors.gray};
  }
`;

export const TextSpan = styled.span`
  margin-bottom: 5px;
  color: ${props => props.theme.colors.gray};
  font-size: 18px;
`;

export const NumberSpan = styled.span`
  font-weight: bold;
  font-size: 20px;
`;
