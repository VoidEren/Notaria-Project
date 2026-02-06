import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '../../Layouts/AuthenticatedLayout';

export default function AgendarCita() {
  return (
    <>
      <Head title="Agendar Cita" />

      <AuthenticatedLayout>
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

            
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded">
                Agendar
              </button>

              <Link
                href="/inicio-rapido"
                className="px-4 py-2 bg-gray-600 text-white rounded"
              >
                Regresar
              </Link>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </>
  );
}
