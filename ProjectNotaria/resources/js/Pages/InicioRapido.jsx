import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';

export default function InicioRapido() {
    return (
        <AuthenticatedLayout>
            <Head title="Inicio Rápido" />

            <div className="flex justify-center w-full mt-12">
                <div className="w-full max-w-6xl border border-gray-300 rounded-xl overflow-hidden shadow-2xl flex">
                    {/* Columna de texto y botones */}
                    <div className="w-1/2 p-10 bg-white flex flex-col justify-center">
                        <h1 className="text-4xl font-bold mb-6 text-center">Inicio Rápido</h1>
                        <p className="text-gray-600 mb-8 text-center">
                            Accede rápidamente a las funciones más usadas en tu notaría.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-100 p-6 rounded-lg text-center shadow hover:shadow-md transition duration-200">
                                <p className="font-semibold text-gray-700">Registrar Escritura</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg text-center shadow hover:shadow-md transition duration-200">
                                <p className="font-semibold text-gray-700">Agendar Cita</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg text-center shadow hover:shadow-md transition duration-200">
                                <p className="font-semibold text-gray-700">Consultar Documentos</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg text-center shadow hover:shadow-md transition duration-200">
                                <p className="font-semibold text-gray-700">Clientes Registrados</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg text-center shadow hover:shadow-md transition duration-200">
                                <p className="font-semibold text-gray-700">Trámites Pendientes</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg text-center shadow hover:shadow-md transition duration-200">
                                <p className="font-semibold text-gray-700">Configuración</p>
                            </div>
                        </div>
                    </div>

                    {/* Columna visual o decorativa */}
                    <div className="w-1/2 bg-gray-100 flex items-center justify-center">
                        <div className="w-3/4 h-3/4 bg-white rounded-lg shadow-inner flex items-center justify-center">
                            <span className="text-6xl text-gray-300">📄🏛️</span>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
