# Nexa Platform

# Database Design

Versión: 1.0

Estado: En diseño

---

# Objetivo

Definir el modelo de datos principal de Nexa Platform.

Este documento describe las entidades, relaciones y reglas de persistencia antes de implementar la base de datos física.

El diseño debe permitir que Nexa escale durante muchos años sin necesidad de reconstruir el modelo.

---

# Principios

- Toda información pertenece a una Organization.
- Toda operación ocurre dentro de un Workspace.
- Los usuarios pertenecen a la plataforma.
- Los datos pertenecen a las organizaciones.
- Ninguna App puede acceder directamente a datos de otra organización.

---

# Modelo General

Platform
│
├── Users
│
├── Organizations
│      │
│      ├── Subscription
│      ├── Settings
│      ├── Roles
│      ├── Members
│      │
│      └── Workspaces
│             │
│             ├── Apps
│             ├── Teams
│             ├── Audit
│             ├── Notifications
│             └── Business Data

---

# Relación principal

Platform

1

↓

N

Organizations

---

Organizations

1

↓

N

Workspaces

---

Organizations

1

↓

N

OrganizationMembers

↓

1

Users

---

Organizations

1

↓

N

Roles

↓

N

Permissions

---

Workspaces

N

↓

N

Apps

(Relación mediante WorkspaceApps)

---

Workspace

1

↓

N

Teams

---

Teams

N

↓

N

Users

---

Workspace

1

↓

N

Business Data

Cada App administra su propio conjunto de datos.

Ejemplo

CRM

↓

Clientes

↓

Contactos

↓

Notas

---

Sales

↓

Cotizaciones

↓

Ventas

↓

Pagos

---

Inventory

↓

Productos

↓

Categorías

↓

Stock

---

Projects

↓

Proyectos

↓

Tareas

↓

Archivos

---

# Entidades Core

Platform

Organization

Workspace

User

OrganizationMember

WorkspaceMember

Role

Permission

Subscription

Plan

App

WorkspaceApp

Notification

AuditLog

Invitation

Settings

---

# Relaciones importantes

## Un usuario

Puede pertenecer a muchas organizaciones.

---

## Una organización

Puede tener muchos Workspaces.

---

## Un Workspace

Puede tener muchas Apps instaladas.

---

## Una App

Puede instalarse en muchos Workspaces.

---

## Un Workspace

Puede contener muchos equipos.

---

## Un equipo

Puede tener muchos usuarios.

---

## Un usuario

Puede pertenecer a muchos equipos.

---

# Integridad

Nunca podrá existir:

Workspace

↓

sin Organization.

---

Cliente

↓

sin Workspace.

---

Venta

↓

sin Workspace.

---

Proyecto

↓

sin Workspace.

---

Usuario

↓

sin Organization.

---

# Aislamiento de datos

Toda consulta deberá considerar como mínimo:

OrganizationId

y cuando corresponda:

WorkspaceId

Esto garantiza el aislamiento completo entre organizaciones.

---

# Escalabilidad

El modelo debe soportar:

- Miles de organizaciones.
- Miles de Workspaces.
- Millones de registros.
- Nuevas Apps.
- Nuevos módulos.
- Nuevas integraciones.

Sin modificar el Core.

---

# Principio final

La base de datos debe reflejar el dominio del negocio.

Nunca al revés.