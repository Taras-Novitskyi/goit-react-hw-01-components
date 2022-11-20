import styled from "styled-components";


export const TransactionTable = styled.table`
  font-size: 20px;
  box-shadow: 0px 2px 5px 0px rgba(66, 68, 90, 1);
  width: 700px;
`;

export const TableHead = styled.thead`
	text-transform: uppercase;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
:nth-child(odd) {
    background-color: #eee;
}
`;

export const ColumnTitle = styled.th`
  padding: 10px;
  width: calc(100% / 3);
  height: 30px;
  text-align: center;
  color: #fff;
  background-color: #706d97;
`;

export const ColumnData = styled.td`
  padding: 10px;
  height: 30px;
  width: calc(100% / 3);
//   min-width: 250px;
  text-align: center;
  color: #696969;
  border-bottom: 1px solid #eee;

  :first-child {
    width: 150px;
    min-width: 0;
  }
  :last-child {
    width: 80px;
    min-width: 0;
  }
`;

