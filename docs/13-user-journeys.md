# Nexa Platform

# User Journeys

Versión: 1.0

Estado: Activo

---

# Objetivo

Este documento describe los recorridos principales de los usuarios dentro de Nexa Platform.

Sirve para diseñar pantallas, permisos y flujos de navegación de forma ordenada.

---

# Tipos de usuario

## 1. Platform Owner

Usuario dueño o administrador de Nexa Platform.

Responsabilidades:

- Administrar la plataforma.
- Ver organizaciones registradas.
- Gestionar planes.
- Supervisar módulos.
- Revisar actividad global.

---

## 2. Organization Admin

Usuario administrador de una organización.

Responsabilidades:

- Crear organización.
- Configurar datos de empresa.
- Activar módulos.
- Invitar usuarios.
- Asignar roles.
- Administrar operación.

---

## 3. Organization Member

Usuario invitado a una organización.

Responsabilidades:

- Acceder a módulos autorizados.
- Ejecutar tareas según permisos.
- Consultar información permitida.
- Registrar operaciones.

---

# Journey 1: Registro de administrador

Usuario visita Nexa.

↓

Crea una cuenta.

↓

Verifica su correo.

↓

Crea su primera organización.

↓

Selecciona módulos iniciales.

↓

Entra al dashboard.

---

# Journey 2: Crear organización

Usuario autenticado entra al onboarding.

↓

Ingresa nombre de la empresa.

↓

Selecciona tipo de organización.

↓

Define país, moneda y zona horaria.

↓

Selecciona módulos iniciales.

↓

Nexa crea el Workspace.

↓

Usuario entra al dashboard de esa organización.

---

# Journey 3: Invitar colaborador

Organization Admin entra a configuración.

↓

Selecciona usuarios.

↓

Invita colaborador por correo.

↓

Asigna rol.

↓

El colaborador recibe invitación.

↓

Acepta invitación.

↓

Accede solo a módulos permitidos.

---

# Journey 4: Colaborador invitado

Usuario recibe invitación.

↓

Crea contraseña o inicia sesión.

↓

Acepta pertenecer a la organización.

↓

Nexa carga sus permisos.

↓

Usuario trabaja en el Workspace autorizado.

---

# Journey 5: Cambio de organización

Usuario pertenece a más de una organización.

↓

Abre selector de organizaciones.

↓

Selecciona organización.

↓

Nexa cambia el Workspace activo.

↓

Sidebar, dashboard y datos se actualizan.

---

# Journey 6: Uso diario

Usuario inicia sesión.

↓

Nexa carga organización activa.

↓

Usuario revisa dashboard.

↓

Accede a módulos permitidos.

↓

Registra actividad.

↓

Sistema guarda auditoría.

---

# Journey 7: Upgrade de plan

Organization Admin entra a suscripción.

↓

Revisa plan actual.

↓

Selecciona nuevo plan.

↓

Nexa actualiza módulos disponibles.

↓

La organización accede a nuevas funcionalidades.

---

# Principio de diseño

Cada pantalla debe responder:

- ¿Quién está usando esta pantalla?
- ¿A qué organización pertenece?
- ¿Qué permisos tiene?
- ¿Qué acción quiere realizar?

---

# Regla principal

Un usuario nunca ve información por estar autenticado solamente.

Ve información porque pertenece a una organización y tiene permisos dentro de ella.