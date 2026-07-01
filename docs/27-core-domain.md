# Nexa Platform

# Core Domain

Versión: 1.0

Estado: En diseño

---

# Objetivo

Definir las entidades principales del Core de Nexa Platform.

Este documento transforma la visión del dominio en modelos concretos que luego serán implementados en frontend, backend y base de datos.

---

# Entidades principales

## Platform

Representa Nexa como sistema global.

Responsabilidades:

- Administrar organizaciones.
- Gestionar usuarios globales.
- Controlar Apps disponibles.
- Gestionar planes.
- Mantener auditoría global.

---

## Organization

Representa una empresa, cliente o entidad registrada en Nexa.

Atributos iniciales:

- id
- name
- slug
- legalName
- taxId
- country
- currency
- timezone
- logoUrl
- primaryColor
- status
- createdAt
- updatedAt

Relaciones:

- Tiene muchos Workspaces.
- Tiene muchos Users.
- Tiene una Subscription.
- Tiene Settings globales.

---

## Workspace

Representa un contexto operativo dentro de una Organization.

Ejemplos:

- Sucursal Santiago.
- Área Comercial.
- Proyecto Edificio Centro.
- Equipo Marketing.

Atributos iniciales:

- id
- organizationId
- name
- slug
- description
- icon
- color
- status
- createdAt
- updatedAt

Relaciones:

- Pertenece a una Organization.
- Tiene Apps instaladas.
- Tiene Teams.
- Contiene datos operativos.

---

## User

Representa una persona que accede a Nexa.

Atributos iniciales:

- id
- firstName
- lastName
- email
- passwordHash
- avatarUrl
- language
- status
- lastLoginAt
- createdAt
- updatedAt

Relaciones:

- Puede pertenecer a muchas Organizations.
- Puede tener distintos Roles por Organization o Workspace.

---

## OrganizationMember

Relaciona un User con una Organization.

Atributos iniciales:

- id
- organizationId
- userId
- roleId
- status
- joinedAt

Responsabilidad:

Define que un usuario pertenece a una organización.

---

## WorkspaceMember

Relaciona un User con un Workspace.

Atributos iniciales:

- id
- workspaceId
- userId
- roleId
- status
- joinedAt

Responsabilidad:

Define qué usuarios pueden trabajar dentro de un Workspace específico.

---

## Role

Representa un conjunto de permisos.

Atributos iniciales:

- id
- organizationId
- name
- description
- isSystemRole
- createdAt
- updatedAt

Ejemplos:

- Owner
- Admin
- Manager
- Seller
- Viewer

---

## Permission

Representa una acción permitida dentro del sistema.

Atributos iniciales:

- id
- code
- name
- description
- appCode
- action

Ejemplos:

- clients.read
- clients.create
- clients.update
- clients.delete
- sales.approve
- inventory.adjust

---

## App

Representa una aplicación instalable dentro de Nexa.

Atributos iniciales:

- id
- code
- name
- description
- category
- icon
- status
- isCore
- createdAt

Ejemplos:

- dashboard
- crm
- quotes
- sales
- inventory
- projects
- reports
- marketplace

---

## WorkspaceApp

Representa una App instalada en un Workspace.

Atributos iniciales:

- id
- workspaceId
- appId
- enabled
- installedAt
- installedByUserId

---

## Subscription

Representa el plan contratado por una Organization.

Atributos iniciales:

- id
- organizationId
- planId
- status
- startedAt
- expiresAt
- renewsAt

---

## Plan

Representa un plan comercial de Nexa.

Atributos iniciales:

- id
- name
- price
- currency
- billingCycle
- maxUsers
- maxWorkspaces
- includedApps
- status

---

## Invitation

Representa una invitación enviada a un usuario.

Atributos iniciales:

- id
- organizationId
- workspaceId
- email
- roleId
- token
- status
- expiresAt
- createdAt
- acceptedAt

---

## AuditLog

Representa una acción registrada dentro de la plataforma.

Atributos iniciales:

- id
- organizationId
- workspaceId
- userId
- action
- entity
- entityId
- metadata
- createdAt

---

## Notification

Representa una notificación para un usuario.

Atributos iniciales:

- id
- userId
- organizationId
- workspaceId
- title
- message
- type
- readAt
- createdAt

---

# Relación principal

```txt
Platform
└── Organizations
    └── Workspaces
        └── Apps
            └── Data