import React from 'react';
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Pagos() {
    return (
        <AuthenticatedLayout>
            <Head title='Mis pagos' />

            <div className="mt-5 flex justify-center items-start min-h-screen px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                    {/* Contenedor 1 - Historial de Pagos */}
                    <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Historial de Pagos</h2>
                        <ul className="space-y-3">
                            <li className="flex justify-between border-b pb-2">
                                <span>Pago #12345</span>
                                <span className="text-green-600 font-semibold">$500.00</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span>Pago #12344</span>
                                <span className="text-green-600 font-semibold">$300.00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contenedor 2 - Pagos Pendientes */}
                    <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Pagos Pendientes</h2>
                        <ul className="space-y-3">
                            <li className="flex justify-between border-b pb-2">
                                <span>Factura #56789</span>
                                <span className="text-red-600 font-semibold">$250.00</span>
                            </li>
                            <li className="flex justify-between border-b pb-2">
                                <span>Factura #56788</span>
                                <span className="text-red-600 font-semibold">$100.00</span>
                            </li>
                        </ul>
                        <div className="flex justify-center mt-4">
                            <button className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600">
                                Realizar Pago
                            </button>
                        </div>
                    </div>

                    {/* Contenedor 3 - Archivos Adjuntos */}
                    <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Archivos Adjuntos</h2>
                        <ul className="space-y-2">
                            <li className="text-gray-700">📄 Contrato_notarial.pdf</li>
                            <li className="text-gray-700">📄 Recibo_pago_marzo.pdf</li>
                        </ul>
                    </div>

                    {/* Contenedor 4 - Estado de Cuenta */}
                    <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Estado de Cuenta</h2>
                        <p className="text-gray-600">Saldo actual: <span className="text-green-600 font-semibold">$1,200.00</span></p>
                        <p className="text-gray-600 mt-2">Último pago: 10 abril 2025</p>
                    </div>

                    {/* Contenedor 5 - Métodos de Pago */}
                    <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Métodos de Pago</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li>💳 Tarjeta Visa (**** 3456)</li>
                            <li>🏦 Transferencia Bancaria</li>
                        </ul>
                    </div>

                    {/* Contenedor 6 - Notificaciones Recientes */}
                    <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Notificaciones</h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Tu pago del 10 de abril fue procesado.</li>
                            <li>La factura #56789 está pendiente.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
