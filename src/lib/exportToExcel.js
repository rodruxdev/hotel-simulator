import * as XLSX from "xlsx";

function exportToExcel(data) {
  // Create a new workbook and a worksheet
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, "Hoja 1");

  // Export the workbook to Excel
  XLSX.writeFile(workbook, "exported_data.xlsx");
}

export default exportToExcel;
