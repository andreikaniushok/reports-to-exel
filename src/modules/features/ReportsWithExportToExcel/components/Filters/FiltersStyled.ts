import styled from "styled-components";

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8fafc;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const FilterLabel = styled.label`
  font-size: 14px;
  color: #4a4a4a;
  font-weight: 500;
`;

const FilterSelect = styled.select`
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #c0c0c0;
  border-radius: 6px;
  background-color: #ffffff;
  color: #333;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.4);
    outline: none;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const FilterData = styled.input`
  padding: 10px 12px;
  font-size: 14px;
  border: 1px solid #c0c0c0;
  border-radius: 6px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.4);
    outline: none;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const StyledFilters = {
  FiltersContainer,
  FilterLabel,
  FilterSelect,
  FilterData,
  FilterWrapper,
};

export default StyledFilters;
