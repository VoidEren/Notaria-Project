import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";

export default function Configuracion() {
    return (
        <>
            <Head title="Configuración" />

            <AuthenticatedLayout>
                <div className="p-4 max-w-lg">
                    <h1 className="text-xl font-semibold mb-4">
                        Configuración
                    </h1>

                    <div className="space-y-4">
                        <div>
                            <label className="block mb-1">
                                Nombre de la Notaría
                            </label>
                            <input type="text" className="border p-2 w-full" />
                        </div>

                        <div>
                            <label className="block mb-1">
                                Correo de Contacto
                            </label>
                            <input type="email" className="border p-2 w-full" />
                        </div>

                        <div>
                            <label className="block mb-1">Teléfono</label>
                            <input type="tel" className="border p-2 w-full" />
                        </div>

                        {/* Botones en la misma fila */}
                        <div className="flex gap-4">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded">
                                Guardar Cambios
                            </button>

                            <Link
                                href="/inicio-rapido"
                                className="px-4 py-2 bg-gray-600 text-white rounded"
                            >
                                Regresar
                            </Link>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
