export default function Configuracion() {
  return (
    <div className="p-4 max-w-lg">
      <h1 className="text-xl font-semibold mb-4">Configuración</h1>

      <div className="space-y-4">

        <div>
          <label className="block mb-1">Nombre de la Notaría</label>
          <input type="text" className="border p-2 w-full" />
        </div>

        <div>
          <label className="block mb-1">Correo de Contacto</label>
          <input type="email" className="border p-2 w-full" />
        </div>

        <div>
          <label className="block mb-1">Teléfono</label>
          <input type="tel" className="border p-2 w-full" />
        </div>

        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Guardar Cambios
        </button>
      </div>
    </div>
  );
}
