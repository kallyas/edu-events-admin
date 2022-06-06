import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const fileExtension = '.xlsx';

export default function exportToCSV(csvData, fileName) {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
}

export function exportToPdf(data, columns, fileName) {
        const doc = new jsPDF()
        doc.text(fileName, 20, 10)
        doc.autoTable({
                theme: "grid",
                columns: columns.map(col => ({ ...col, dataKey: col.path })),
                body: data
        })
        doc.save(`${fileName}.pdf`)
}