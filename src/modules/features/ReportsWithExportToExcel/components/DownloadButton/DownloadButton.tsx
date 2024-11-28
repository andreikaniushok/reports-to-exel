import React from "react";
import { IReport } from "../../interfaces/IReport";
import { exportToExcel } from "../../utils/exportToExcel";
import Styled from "./DownloadButtonStyled";

interface DownloadButtonProps {
  reportList: IReport[];
  label: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  reportList,
  label,
}) => {
  const handleDownload = () => {
    exportToExcel(reportList, "Заявки.xlsx");
  };

  return <Styled.Button onClick={handleDownload}>{label}</Styled.Button>;
};

export default DownloadButton;
