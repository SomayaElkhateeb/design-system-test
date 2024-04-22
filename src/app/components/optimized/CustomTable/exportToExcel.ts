import * as XLSX from 'xlsx';

export const exportToExcel = (data: any[], filename: string) => {
  // Convert data to worksheet
  const ws = XLSX.utils.json_to_sheet(data);

  // Create workbook
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Save to file
  XLSX.writeFile(wb, filename);
};
