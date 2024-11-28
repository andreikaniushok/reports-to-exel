import * as ExcelJS from "exceljs";
import { IReport } from "../interfaces/IReport";

export const exportToExcel = async (
  data: IReport[],
  fileName: string = "Заявки.xlsx"
) => {
  const formattedData = data.map((report) => ({
    ID: report.id,
    Дата: report.date,
    Организация: report.organization,
    Тип: report.type,
    "Предполагаемая стоимость": report.estimatedCost,
    "Желаемая дата завершения": report.desiredCompletionDate,
    Описание: report.description,
  }));

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Заявки");

  worksheet.columns = [
    { header: "ID", key: "ID", width: 10 },
    { header: "Дата", key: "Дата", width: 15 },
    { header: "Организация", key: "Организация", width: 25 },
    { header: "Тип", key: "Тип", width: 20 },
    {
      header: "Предполагаемая стоимость",
      key: "Предполагаемая стоимость",
      width: 35,
    },
    {
      header: "Желаемая дата завершения",
      key: "Желаемая дата завершения",
      width: 35,
    },
    { header: "Описание", key: "Описание", width: 50 },
  ];

  worksheet.addRows(formattedData);

  worksheet.getRow(1).height = 30;

  worksheet.getRow(1).eachCell((cell, colNumber) => {
    if (cell.value) {
      cell.font = { bold: true, size: 14, color: { argb: "FFFFFFFF" } };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF007BFF" },
      };

      cell.border = {
        top: { style: "thin", color: { argb: "000000" } },
        left: { style: "thin", color: { argb: "000000" } },
        bottom: { style: "thin", color: { argb: "000000" } },
        right: { style: "thin", color: { argb: "000000" } },
      };
    } else {
      cell.font = { size: 14 };
      cell.border = {};
    }
  });

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      row.height = 20;
      row.alignment = {
        wrapText: true,
        vertical: "middle",
        horizontal: "center",
      };

      row.font = { size: 14, color: { argb: "000000" } };
      row.border = {};

      row.eachCell((cell) => {
        if (cell.value) {
          cell.border = {
            top: { style: "thin", color: { argb: "000000" } },
            left: { style: "thin", color: { argb: "000000" } },
            bottom: { style: "thin", color: { argb: "000000" } },
            right: { style: "thin", color: { argb: "000000" } },
          };
        }
      });
    }
  });

  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  });
};
