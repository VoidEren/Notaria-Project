import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Iniciar sesión" />

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
                <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
                    <h2 className="text-3xl font-extrabold text-white text-center mb-2 tracking-wide">
                        Inicia sesión
                    </h2>
                    <p className="text-sm text-gray-300 text-center mb-6">
                        Bienvenido de nuevo. Ingresa tus credenciales.
                    </p>

                    {status && (
                        <div className="mb-4 text-sm text-green-400 font-medium">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="email" value="Correo electrónico" className="text-white" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full bg-black/20 text-white border border-white/30 placeholder-gray-400"
                                placeholder="ejemplo@correo.com"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="mt-2 text-pink-300" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Contraseña" className="text-white" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full bg-black/20 text-white border border-white/30 placeholder-gray-400"
                                placeholder="********"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-2 text-pink-300" />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center text-white text-sm">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ml-2">Recordarme</span>
                            </label>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm text-blue-400 hover:text-blue-300 transition"
                                >
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            )}
                        </div>

                        <div className="flex justify-between items-center">
                            <Link
                                href={route('register')}
                                className="text-sm text-gray-400 hover:text-white transition"
                            >
                                ¿No tienes cuenta?
                            </Link>

                            <PrimaryButton
                                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-xl transition shadow-md"
                                disabled={processing}
                            >
                                {processing ? 'Iniciando...' : 'Entrar'}
                            </PrimaryButton>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <Link
                            href={route('home')}
                            className="text-sm text-gray-400 hover:text-white transition"
                        >
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
