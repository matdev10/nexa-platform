# Nexa Platform

# Module Catalog

Versión: 1.0

Estado: En diseño

---

# Objetivo

Este documento define el catálogo oficial de módulos que pueden formar parte de Nexa Platform.

Las organizaciones podrán activar únicamente los módulos que necesiten según su plan y operación.

---

# Arquitectura de módulos

Nexa Platform se divide en tres niveles:

Core

↓

Business Apps

↓

Integrations

---

# Nivel 1 - Core

El Core contiene las funcionalidades indispensables para el funcionamiento de la plataforma.

Estos módulos siempre estarán disponibles.

## Authentication

- Login
- Registro
- Recuperar contraseña
- Verificación de correo
- MFA (futuro)

---

## Organizations

- Crear organización
- Seleccionar organización
- Configuración
- Branding

---

## Users

- Usuarios
- Invitaciones
- Equipos

---

## Roles

- Crear roles
- Editar roles
- Permisos

---

## Dashboard

- KPIs
- Actividad
- Widgets
- Accesos rápidos

---

## Settings

- Configuración general
- Idioma
- Moneda
- Zona horaria

---

# Nivel 2 - Business Apps

Cada organización decide cuáles instalar.

## CRM

- Clientes
- Prospectos
- Contactos
- Seguimiento

---

## Quotes

- Cotizaciones
- Versiones
- PDF
- Aprobaciones

---

## Sales

- Ventas
- Facturas
- Boletas
- Pagos

---

## Inventory

- Productos
- Categorías
- Stock
- Kardex

---

## Purchases

- Compras
- Órdenes
- Proveedores

---

## Projects

- Proyectos
- Kanban
- Tareas
- Calendario

---

## HR

- Empleados
- Contratos
- Vacaciones
- Asistencia

---

## Finance

- Caja
- Bancos
- Gastos
- Ingresos

---

## Reports

- KPIs
- Dashboards
- Exportaciones

---

## Help Desk

- Tickets
- Soporte
- SLA

---

## POS

- Punto de venta
- Caja
- Impresión

---

## Ecommerce

- Catálogo
- Pedidos
- Clientes
- Integraciones

---

## Marketing

- Email
- Campañas
- Redes sociales

---

# Nivel 3 - Integrations

Conectores externos.

## Pagos

- Mercado Pago
- Stripe
- Transbank
- PayPal

---

## Mensajería

- WhatsApp
- Telegram
- Email

---

## Productividad

- Google Calendar
- Gmail
- Microsoft 365

---

## Ecommerce

- Shopify
- WooCommerce

---

## Cloud

- Google Drive
- OneDrive
- Dropbox

---

## IA

- OpenAI
- Gemini
- Claude

---

# Marketplace

Cada módulo podrá instalarse o desinstalarse desde el Marketplace de Nexa.

Las organizaciones podrán ampliar la plataforma sin modificar el Core.

---

# Principio

El Core nunca dependerá de un módulo.

Los módulos dependerán del Core.

Las integraciones dependerán de los módulos y del Core.

Esto garantiza una arquitectura desacoplada y escalable.