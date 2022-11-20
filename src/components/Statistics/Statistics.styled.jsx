import styled from 'styled-components';

export const Container = styled.section`
  width: 500px;
  margin: 10px;
  line-height: 1;
  border-radius: 4px;
  border: 1px solid rgb(222, 222, 222);
  background-color: rgb(249, 249, 249);
`;

export const Title = styled.h2`
  padding: 40px;
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 600;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

export const StatsItem = styled.li`
  width: calc(100% / 5);
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid rgb(222, 222, 222);
  background-color: rgb(236, 236, 236);
`;

export const Label = styled.span`
  font-size: 20px;
  color: rgb(150, 150, 150);
`;

export const Percentage = styled.span`
  font-size: 30px;
  color: rgb(150, 150, 150);
`;
