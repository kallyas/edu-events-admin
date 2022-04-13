import React, { useState } from 'react';
import { IconFileSpreadsheet, IconFileExport } from '@tabler/icons';
import exportToCSV, { exportToPdf } from "../utils/ExportData";

const ExportLabel = ({ data, columns, fileName }) => {
    const [expand, setExpand] = useState(false);
    const handleClick = () => setExpand(!expand);
    const handleExportExcel = () => {
        exportToCSV(data, fileName);
        setExpand(false);
    };
    const handleExportPDF = () => {
        exportToPdf(data, columns, fileName);
        setExpand(false);
    };

    return (
        <div className="mb-1">
            <div className="btn-group w-100">
                <div className="btn-group" role="group" onClick={handleClick}>
                    <button type="button" className={`btn dropdown-toggle text-muted ${expand ? 'show' : ''}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded={expand}>
                        Export
                    </button>
                    <div className={`dropdown-menu dropdown-menu-end export-dropdown ${expand ? 'show' : ''}`}>
                        <a className="dropdown-item" href="#/" onClick={handleExportExcel}>
                            <IconFileSpreadsheet className='icon-export' />
                            Excel
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#/" onClick={handleExportPDF}>
                            <IconFileExport className='icon-export' />
                            Pdf
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExportLabel