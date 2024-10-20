export const formatDataToExport = (data) => {
  const { incident, service, visits } = data;
  return visits.reduce((acc, visit, index) => {
    const visitsColumns = Object.keys(visit).reduce((acc, key) => {
      const columnTittle = visit[key].field;
      const value = visit[key].value;
      acc[columnTittle] = value;
      return acc;
    }, {});
    const newRow = {
      ...visitsColumns,
      ...(index === 0
        ? {
            Incidente: incident,
            "Asistentes al servicio": service?.people,
            "Tipo de servicio": service?.type,
          }
        : {}),
    };
    acc.push(newRow);
    return acc;
  }, []);
};
