import React, { useState } from "react";
import { IReport } from "./interfaces/IReport";
import Styled from "./ReportsWithExportToExcelStyled";
import Filters from "./components/Filters/Filters";
import { useSelector } from "react-redux";
import { FilteredReportsSelectors } from "./modules/features/store/FilteredReports.slice";
import { TRootState } from "../../../app/store";
import ReportsTable from "./components/ReportsTable/ReportsTable";
import DownloadButton from "./components/DownloadButton/DownloadButton";

interface IProps {
  reportsList: IReport[];
}

const ReportsWithExportToExcel: React.FC<IProps> = ({ reportsList }) => {
  const filteredReports = useSelector((state: TRootState) =>
    FilteredReportsSelectors.selectFilteredReports(state)
  );

  return (
    <Styled.FeatureContainer>
      <Styled.Title>Заявки</Styled.Title>

      <Filters reportsList={reportsList} />

      <Styled.TableContainer>
        <ReportsTable reportsList={filteredReports} />
      </Styled.TableContainer>

      <Styled.DownloadButtonContainer>
        <DownloadButton
          reportList={filteredReports}
          label={"Скачать в Excel"}
        />
      </Styled.DownloadButtonContainer>
    </Styled.FeatureContainer>
  );
};

export default ReportsWithExportToExcel;
