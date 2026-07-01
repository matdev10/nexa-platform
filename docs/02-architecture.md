# Arquitectura de Nexa Platform

## Filosofía

Nexa Platform se construye bajo una arquitectura modular.

Cada componente tiene una responsabilidad única y puede evolucionar sin afectar al resto del sistema.

---

## Estructura principal

src/
└── app/
    ├── core/
    ├── shared/
    ├── features/
    ├── app.routes.ts
    ├── app.ts
    └── app.html

---

## Core

Contiene el corazón de la plataforma.

Responsabilidades:

- Autenticación
- Organizaciones
- Usuarios
- Roles
- Permisos
- Guards
- Servicios globales
- Layout

---

## Shared

Elementos reutilizables.

Ejemplos:

- Botones
- Cards
- Inputs
- Pipes
- Directivas
- Utilidades

---

## Features

Cada carpeta representa un módulo funcional.

Ejemplo:

features/
    dashboard/
    clients/
    quotes/
    sales/
    inventory/
    reports/
    settings/

---

## Principio

Ningún módulo debe depender directamente de otro.

Todos deben comunicarse mediante servicios del Core.