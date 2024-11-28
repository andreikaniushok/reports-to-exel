import styled from "styled-components";

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 15px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 10px;
    max-width: 100%;
  }
`;

const TableContainer = styled.div`
  flex: 1;
  overflow-x: auto;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const DownloadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 140%;
`;

const StyledReportsWithExportToExcel = {
  FeatureContainer,
  TableContainer,
  DownloadButtonContainer,
  Title,
};

export default StyledReportsWithExportToExcel;
