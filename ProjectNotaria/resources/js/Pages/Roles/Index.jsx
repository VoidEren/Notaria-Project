import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

export default function Index({ auth, roles, success }) {
    const handleDelete = (id) => {
        if (confirm('¿Estás seguro de eliminar este rol?')) {
            Inertia.delete(route('roles.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Roles</h2>}
        >
            <Head title="Roles" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="mb-4">
                            <Link href={route('roles.create')} className="inline-flex items-center px-4 py-2 bg-green-500 dark:bg-green-700 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-100 uppercase tracking-widest hover:bg-green-600 dark:hover:bg-green-800 focus:bg-green-600 dark:focus:bg-green-800 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150">
                                Crear Nuevo Rol
                            </Link>
                            {success && <p className="mt-2 text-green-500">{success}</p>}
                        </div>

                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Nombre
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Acciones</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                {roles.map((role) => (
                                    <tr key={role.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300">
                                            {role.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link href={route('roles.edit', role.id)} className="text-indigo-600 dark:text-indigo-500 hover:text-indigo-900 dark:hover:text-indigo-700 focus:outline-none">
                                                Editar
                                            </Link>
                                            <button onClick={() => handleDelete(role.id)} className="text-red-600 dark:text-red-500 hover:text-red-900 dark:hover:text-red-700 focus:outline-none ml-2">
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}