import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
export default function ConsultarDocumentos() {
    return (
        <>
            <Head title="Consultar Documentos" />

            <AuthenticatedLayout>
                <div className="p-4">
                    <h1 className="text-xl font-semibold mb-4">
                        Consultar Documentos
                    </h1>

                    <input
                        type="text"
                        placeholder="Buscar por número, cliente o tipo"
                        className="border p-2 mb-4 w-full"
                    />

                    <table className="w-full border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 border"># Escritura</th>
                                <th className="p-2 border">Cliente</th>
                                <th className="p-2 border">Fecha</th>
                                <th className="p-2 border">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* Aquí irán los resultados de la BD */}
                            <tr>
                                <td className="border p-2">123</td>
                                <td className="border p-2">Juan Pérez</td>
                                <td className="border p-2">2025-01-20</td>
                                <td className="border p-2">
                                    <button className="px-3 py-1 bg-blue-600 text-white rounded">
                                        Ver
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex gap-4">
                        <Link
                            href="/inicio-rapido"
                            className="px-4 py-2 bg-gray-600 text-white rounded"
                        >
                            Regresar
                        </Link>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
