import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 320px;
  padding: 10px 20px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 5px 0px rgba(150, 150, 150, 1);
  transition: transform 100ms ease-in-out;

  :hover {
    box-shadow: 1px 3px 5px 0px rgba(150, 150, 150, 1);
    transform: translate(-2px, -2px);
  }
`;

export const Status = styled.span`
  margin-right: 20px;
  background-color: ${props => (props.status ? 'green' : 'red')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  margin-right: 20px;
  display: block;
  max-width: 100%;
  width: 58px;
  height: 58px;
`;

export const Name = styled.p`
  font-weight: 600;
`;
