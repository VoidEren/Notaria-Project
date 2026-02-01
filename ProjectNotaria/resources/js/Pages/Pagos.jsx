import React, { useEffect } from 'react';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Pagos() {
    return (
        <AuthenticatedLayout>
            <Head title='Mis pagos'/>
            {/* Contenedor principal centrado */}
            <div className="mt-5 flex justify-center items-center min-h-screen">
                <div className="flex w-full max-w-5xl border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                    {/* Historial de pagos */}
                    <div className="w-1/2 p-8 bg-white">
                        <h1 className="text-3xl font-bold mb-4 text-center">Historial de Pagos</h1>
                        <p className="text-gray-600 mb-4 text-center">
                            Consulta los pagos realizados anteriormente.
                        </p>

                        {/* Lista de pagos realizados */}
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center border-b pb-2">
                                <span>Pago #12345</span>
                                <span className="text-green-600 font-semibold">$500.00</span>
                            </li>
                            <li className="flex justify-between items-center border-b pb-2">
                                <span>Pago #12344</span>
                                <span className="text-green-600 font-semibold">$300.00</span>
                            </li>
                            <li className="flex justify-between items-center border-b pb-2">
                                <span>Pago #12343</span>
                                <span className="text-green-600 font-semibold">$150.00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Pagos pendientes */}
                    <div className="w-1/2 p-8 bg-gray-100">
                        <h1 className="text-3xl font-bold mb-4 text-center">Pagos Pendientes</h1>
                        <p className="text-gray-600 mb-4 text-center">
                            Completa tus pagos pendientes a continuación.
                        </p>

                        {/* Lista de pagos pendientes */}
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center border-b pb-2">
                                <span>Factura #56789</span>
                                <span className="text-red-600 font-semibold">$250.00</span>
                            </li>
                            <li className="flex justify-between items-center border-b pb-2">
                                <span>Factura #56788</span>
                                <span className="text-red-600 font-semibold">$100.00</span>
                            </li>
                        </ul>

                        {/* Botón de pagar */}
                        <div className="flex justify-center mt-6">
                            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-150">
                                Realizar Pago
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
