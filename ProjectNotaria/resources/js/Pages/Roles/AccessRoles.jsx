import React, { useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function AccessRoles({ auth }) {
    // Opcional: Puedes realizar alguna lógica aquí antes de mostrar la lista de roles.
    // Por ejemplo, verificar permisos adicionales.

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Acceder a Roles</h2>}
        >
            <Head title="Acceder a Roles" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <p className="mb-4 dark:text-gray-100">
                            Estás a punto de acceder a la sección de gestión de roles.
                        </p>
                        <Link href={route('roles.index')} className="inline-flex items-center px-4 py-2 bg-indigo-600 dark:bg-indigo-800 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-100 uppercase tracking-widest hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:bg-indigo-500 dark:focus:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150">
                            Ir a la Lista de Roles
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}