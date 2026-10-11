# Nexa Platform

# Product Backlog

Versión: 1.0

Estado: Activo

---

# Objetivo

Este documento contiene el backlog oficial de Nexa Platform.

Todo el desarrollo futuro partirá desde este documento.

Cada funcionalidad pertenecerá a un EPIC.

Cada EPIC estará compuesto por Historias de Usuario.

---

# EPIC 01

Core Platform

Objetivo

Construir el núcleo de Nexa.

Historias

HU-001 Registro

HU-002 Login

HU-003 Recuperar contraseña

HU-004 Verificar correo

HU-005 Crear organización

HU-006 Seleccionar organización

HU-007 Dashboard

Estado

En curso. Registro, login, recuperación de contraseña, organización y dashboard ya tienen superficie en el frontend.

---

# EPIC 02

Identity & Access

Objetivo

Administración de usuarios y permisos.

Historias

HU-020 Usuarios

HU-021 Roles

HU-022 Permisos

HU-023 Equipos

HU-024 Invitaciones

Estado

Pendiente

---

# EPIC 03

CRM

Objetivo

Administración de clientes.

Historias

HU-030 Clientes

HU-031 Contactos

HU-032 Etiquetas

HU-033 Historial

HU-034 Importar

HU-035 Exportar

Estado

En curso. HU-030 cubre listar, buscar, crear, editar y eliminar clientes del Workspace activo. Importar, exportar, historial y etiquetas siguen pendientes.

---

# EPIC 04

Quotes

Objetivo

Administrar cotizaciones.

Historias

HU-040 Crear cotización

HU-041 Editar

HU-042 PDF

HU-043 Enviar correo

HU-044 Aprobar

HU-045 Rechazar

HU-046 Convertir en venta

Estado

Pendiente

---

# EPIC 05

Sales

Historias

HU-050 Ventas

HU-051 Facturas

HU-052 Boletas

HU-053 Pagos

HU-054 Historial

---

# EPIC 06

Inventory

Historias

HU-060 Productos

HU-061 Categorías

HU-062 Marcas

HU-063 Stock

HU-064 Kardex

HU-065 Bodega

---

# EPIC 07

Projects

Historias

HU-070 Proyectos

HU-071 Tareas

HU-072 Kanban

HU-073 Calendario

HU-074 Archivos

---

# EPIC 08

HR

Historias

HU-080 Empleados

HU-081 Contratos

HU-082 Vacaciones

HU-083 Asistencia

HU-084 Remuneraciones

---

# EPIC 09

Reports

Historias

HU-090 Dashboard BI

HU-091 KPIs

HU-092 Exportar PDF

HU-093 Exportar Excel

---

# EPIC 10

Marketplace

Historias

HU-100 Catálogo

HU-101 Instalar Apps

HU-102 Actualizaciones

HU-103 Licencias

---

# EPIC 11

Integrations

Historias

HU-110 Mercado Pago

HU-111 Stripe

HU-112 Gmail

HU-113 Google Calendar

HU-114 WhatsApp

HU-115 Shopify

HU-116 OpenAI

---

# Estado general

Sprint actual

Sprint 01 — Core Foundation

Estado

Frontend del núcleo, App Shell y Clientes en curso. La API esperada sigue en localhost:5068.


# ACTUALIZACION 27 AGOSTO 2026 #

CORE FOUNDATION
✅ Authentication
✅ Organizations
✅ Workspaces
✅ JWT
✅ Guards
✅ Context persistence
✅ Logout
✅ Angular/API integration

APP SHELL
⬜ AppLayout
⬜ Sidebar
⬜ Topbar
⬜ Organization switcher
⬜ Workspace switcher
⬜ User menu
⬜ Main router surface
⬜ Responsive shell

DASHBOARD FOUNDATION
⬜ Dashboard header
⬜ Metrics cards
⬜ Recent activity
⬜ Quick actions
⬜ Workspace summary

FUTURE SHELL
⬜ Context panel
⬜ Global search
⬜ Command palette
⬜ Notifications
⬜ Nexa AI


# ACTUALIZACION 10 OCTUBRE 2026 #

Esta actualización reemplaza el estado del 27 de agosto.

CORE FOUNDATION
✅ Authentication
✅ Organizations
✅ Workspaces
✅ JWT
✅ Guards
✅ Context persistence
✅ Logout en el menú de usuario
✅ Angular/API integration
✅ Recuperar contraseña
⬜ Verificar correo

APP SHELL
✅ AppLayout
✅ Sidebar
✅ Topbar
✅ Organization switcher
✅ Workspace switcher
✅ User menu
✅ Main router surface
✅ Fondo de la superficie principal
⬜ Responsive shell pulido en móvil

DASHBOARD FOUNDATION
✅ Dashboard header
✅ Workspace summary
✅ Actividad reciente vacía
⬜ Metrics cards
⬜ Quick actions

CLIENTES
✅ Listar, buscar, crear y editar contra /api/customers
✅ Desactivar (la API no borra; cambia el estado a inactive)
⬜ Importar
⬜ Exportar
⬜ Historial
⬜ Etiquetas

Buscar y Notificaciones de la topbar quedan ocultos hasta que existan como funciones del shell.