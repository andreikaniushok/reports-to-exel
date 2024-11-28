import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { IReport } from "../../interfaces/IReport";
import Styled from "./FiltersStyled";
import { FilteredReportsActions } from "../../modules/features/store/FilteredReports.slice";

interface FiltersProps {
  reportsList: IReport[];
}

const Filters: React.FC<FiltersProps> = React.memo(({ reportsList }) => {
  const dispatch = useDispatch();

  const [type, setType] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const uniqueTypes = useMemo(
    () => Array.from(new Set(reportsList.map((report) => report.type))),
    [reportsList]
  );
  const uniqueOrganizations = useMemo(
    () => Array.from(new Set(reportsList.map((report) => report.organization))),
    [reportsList]
  );

  const filteredReports = useMemo(() => {
    return reportsList.filter((report) => {
      const matchesType = type ? report.type === type : true;
      const matchesOrganization = organization
        ? report.organization === organization
        : true;
      const matchesDate = date ? report.date === date : true;
      return matchesType && matchesOrganization && matchesDate;
    });
  }, [type, organization, date, reportsList]);

  useEffect(() => {
    dispatch(FilteredReportsActions.setFilteredReports(filteredReports));
  }, [filteredReports]);

  const handleTypeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setType(e.target.value),
    []
  );
  const handleOrganizationChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) =>
      setOrganization(e.target.value),
    []
  );
  const handleDateChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value),
    []
  );

  console.log("RENDERED");

  return (
    <Styled.FiltersContainer>
      <Styled.FilterWrapper>
        <Styled.FilterLabel htmlFor="type-select">
          Тип заявки:
        </Styled.FilterLabel>
        <select
          id="type-select"
          title="select type"
          style={{
            padding: "8px 12px",
            fontSize: "14px",
            border: "1px solid #c0c0c0",
            borderRadius: "6px",
            backgroundColor: "#ffffff",
            color: "#333",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          }}
          value={type}
          onChange={handleTypeChange}
        >
          <option value="">Все</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Styled.FilterWrapper>

      <Styled.FilterWrapper>
        <Styled.FilterLabel htmlFor="organization-select">
          Организация:
        </Styled.FilterLabel>
        <select
          id="organization-select"
          style={{
            padding: "8px 12px",
            fontSize: "14px",
            border: "1px solid #c0c0c0",
            borderRadius: "6px",
            backgroundColor: "#ffffff",
            color: "#333",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          }}
          title="select organization"
          value={organization}
          onChange={handleOrganizationChange}
        >
          <option value="">Все</option>
          {uniqueOrganizations.map((org) => (
            <option key={org} value={org}>
              {org}
            </option>
          ))}
        </select>
      </Styled.FilterWrapper>

      <Styled.FilterWrapper>
        <Styled.FilterLabel htmlFor="date-input">Дата:</Styled.FilterLabel>
        <Styled.FilterData
          id="date-input"
          type="date"
          value={date}
          onChange={handleDateChange}
        />
      </Styled.FilterWrapper>
    </Styled.FiltersContainer>
  );
});

export default Filters;
