import React from "react";
import { IReport } from "../../interfaces/IReport";
import Styled from "./ReportsTableStyled";

interface ReportsTableProps {
  reportsList: IReport[];
}

const ReportsTable: React.FC<ReportsTableProps> = ({ reportsList }) => {
  return (
    <Styled.Table>
      <thead>
        <tr>
          <Styled.HeaderCell>№</Styled.HeaderCell>
          <Styled.HeaderCell>Организация</Styled.HeaderCell>
          <Styled.HeaderCell>Дата</Styled.HeaderCell>
          <Styled.HeaderCell>Тип</Styled.HeaderCell>
          <Styled.HeaderCell>Предполагаемая стоимость</Styled.HeaderCell>
          <Styled.HeaderCell>Желаемая дата завершения</Styled.HeaderCell>
          <Styled.HeaderCell>Описание</Styled.HeaderCell>
        </tr>
      </thead>
      <tbody>
        {reportsList.map((report) => (
          <tr key={report.id}>
            <Styled.Cell>{report.id}</Styled.Cell>
            <Styled.Cell>{report.organization}</Styled.Cell>
            <Styled.Cell>{report.date}</Styled.Cell>
            <Styled.Cell>{report.type}</Styled.Cell>
            <Styled.Cell>{report.estimatedCost}</Styled.Cell>
            <Styled.Cell>{report.desiredCompletionDate}</Styled.Cell>
            <Styled.Cell>{report.description}</Styled.Cell>
          </tr>
        ))}
      </tbody>
    </Styled.Table>
  );
};

export default ReportsTable;
