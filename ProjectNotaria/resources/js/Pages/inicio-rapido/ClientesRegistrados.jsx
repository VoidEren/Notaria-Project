export default function ClientesRegistrados() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Clientes Registrados</h1>

      <input
        type="text"
        placeholder="Buscar cliente..."
        className="border p-2 mb-4 w-full"
      />

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Nombre</th>
            <th className="p-2 border">Teléfono</th>
            <th className="p-2 border">Correo</th>
            <th className="p-2 border">Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2">Carlos Mendoza</td>
            <td className="border p-2">7711234567</td>
            <td className="border p-2">carlos@mail.com</td>
            <td className="border p-2">
              <button className="px-2 py-1 bg-blue-600 text-white rounded">
                Ver
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
