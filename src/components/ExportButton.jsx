import React, { useContext, useMemo } from "react";
import AppContext from "../context/AppContext";
import { formatDataToExport } from "../lib/formatDataToExport";
import exportToExcel from "../lib/exportToExcel";

const ExportButton = () => {
  const { state } = useContext(AppContext);

  const isExportAllowed = useMemo(() => {
    const { incident, service, visits } = state;
    return incident && service && visits.length > 0;
  }, [state]);

  const handleExport = () => {
    const { incident, service, visits } = state;
    if (isExportAllowed) {
      try {
        const formattedData = formatDataToExport({ incident, service, visits });
        exportToExcel(formattedData);
      } catch (err) {
        console.error(err);
        const message = `¡Error al exportar! Por favor verifica que todos los campos estan generados o recarga la página`;
        alert(message);
      }
    }
  };
  return (
    <button
      className="py-2 px-4 text-black border-primary rounded-md h-auto border-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200"
      onClick={handleExport}
      disabled={!isExportAllowed}
    >
      Exportar a Excel
    </button>
  );
};

export default ExportButton;
