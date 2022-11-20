import styled from 'styled-components';


export const Description = styled.div`
  padding-top: 20px;
  text-align: center;
  flex-grow: 1;
`;

export const Avatar = styled.img`
  display: block;
  max-width: 100%;
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

export const Tag = styled.p`
  font-size: 20px;
  color: rgb(150, 150, 150);
`;

export const Location = styled.p`
  font-size: 20px;
  color: rgb(150, 150, 150);
`;


export const StatsItem = styled.li`
  width: calc(100% / 3);
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid rgb(222, 222, 222);
  background-color: rgb(236, 236, 236);
`;

export const Label = styled.span`
  font-size: 16px;
  color: rgb(150, 150, 150);
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 20px;
`;