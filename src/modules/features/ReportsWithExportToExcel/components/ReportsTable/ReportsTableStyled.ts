import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (max-width: 320px) {
    font-size: 11px;
  }
`;

const HeaderCell = styled.th`
  background-color: #007bff;
  color: #ffffff;
  padding: 10px;
  text-align: left;
  font-weight: 600;
  border: 1px solid #cccccc;

  @media (max-width: 480px) {
    padding: 8px;
  }

  @media (max-width: 320px) {
    padding: 6px;
  }
`;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #cccccc;
  text-align: left;
  white-space: nowrap;

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 12px;
  }

  @media (max-width: 320px) {
    padding: 4px;
    font-size: 11px;
  }
`;

const Row = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid #e0e0e0;

  @media (max-width: 480px) {
    border: none;
  }
`;

const StyledReportsTable = {
  TableWrapper,
  Table,
  HeaderCell,
  Cell,
  Row,
};

export default StyledReportsTable;
