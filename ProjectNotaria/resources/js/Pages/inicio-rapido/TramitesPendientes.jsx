export default function TramitesPendientes() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Trámites Pendientes</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Trámite</th>
            <th className="p-2 border">Cliente</th>
            <th className="p-2 border">Estado</th>
            <th className="p-2 border">Fecha Límite</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2">Generar Escritura</td>
            <td className="border p-2">María López</td>
            <td className="border p-2 text-yellow-600">Pendiente</td>
            <td className="border p-2">2025-02-10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
