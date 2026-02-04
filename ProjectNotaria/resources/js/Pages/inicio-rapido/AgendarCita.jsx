export default function AgendarCita() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Agendar Cita</h1>

      <form className="space-y-4">

        <div>
          <label className="block mb-1">Cliente</label>
          <input type="text" className="border p-2 w-full" />
        </div>

        <div>
          <label className="block mb-1">Fecha</label>
          <input type="date" className="border p-2 w-full" />
        </div>

        <div>
          <label className="block mb-1">Hora</label>
          <input type="time" className="border p-2 w-full" />
        </div>

        <div>
          <label className="block mb-1">Motivo de la Cita</label>
          <textarea className="border p-2 w-full"></textarea>
        </div>

        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Agendar
        </button>
      </form>
    </div>
  );
}
