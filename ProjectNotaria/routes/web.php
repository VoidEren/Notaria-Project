<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ArchivoController;
use App\Http\Controllers\RoleController;

// Ruta para la bienvenida
Route::get('/', function() {
    return Inertia::render('Bienvenida');
})->name('home');

// Ruta para inicio rápido
Route::get('/inicio-rapido', function() {
    return Inertia::render('InicioRapido');
})->name('inicio-rapido');

// Ruta para Los Pagos
Route::get('/pagos', function() {
    return Inertia::render('Pagos');
})->name('pagos');

// Ruta para los reportes Generales
Route::get('/reportes', function() {
    return Inertia::render('Reportes');
})->name('reportes');

Route::get('/subir-archivos', function(){
    return Inertia::render('SubirArchivos');
})->name('subir-archivos');

Route::get('/roles/access', function () {
    return Inertia::render('Roles/AccessRoles');
})->name('roles.access');

Route::get('/inicio-rapido/agendar-cita', function () {
    return Inertia::render('inicio-rapido/AgendarCita');
})->name('roles.agendar-cita');

Route::get('/inicio-rapido/clientes-registrados', function(){
    return Inertia::render('inicio-rapido/ClientesRegistrados');
})->name('roles.clientes-registrados');

Route::get('/inicio-rapido/configuracion', function(){
    return Inertia::render('inicio-rapido/Configuracion');
})->name('roles.configuracion');

Route::get('/inicio-rapido/consultar-documentos', function(){
    return Inertia::render('inicio-rapido/ConsultarDocumentos');
})->name('roles.consultar-documentos');

Route::get('/inicio-rapido/registrar-escritura', function(){
    return Inertia::render('inicio-rapido/RegistrarEscritura');
})->name('roles.registrar-escritura');

Route::get('/inicio-rapido/tramites-pendientes', function(){
    return Inertia::render('inicio-rapido/TramitesPendientes');
})->name('roles.tramites-pendientes');


// Rutas protegidas con autenticación
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/archivos', [ArchivoController::class, 'store'])->name('archivos.store');
Route::delete('archivos/{id}', [ArchivoController::class, 'delete'])->name('archivos.delete');

// Comentando o eliminando la segunda definición de la ruta raíz
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('roles', RoleController::class);
});

require __DIR__.'/auth.php';