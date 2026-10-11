# Nexa App Shell

## Purpose

Nexa App Shell es la superficie persistente que contiene
la experiencia principal de la plataforma.

Su objetivo es que el usuario permanezca dentro de un centro
de mando continuo mientras cambia de contexto, módulo o tarea.

## Structure

Nexa Shell

├── Sidebar
│   ├── Dashboard
│   ├── CRM
│   ├── Sales
│   ├── Inventory
│   ├── Purchases
│   ├── Projects
│   ├── HR
│   └── Reports
│
├── Topbar
│   ├── Organization Selector
│   ├── Workspace Selector
│   ├── Search
│   ├── Notifications
│   └── User Menu
│
├── Main Surface
│   └── Active App / Route
│
└── Context Panel
    ├── Activity
    ├── Details
    ├── Actions
    └── Nexa AI

## UX Principle

The shell remains stable.
The content changes.

Changing from CRM to Sales must not feel like leaving the application.

Changing Organization or Workspace changes the operational context
without replacing the global navigation structure.

## Evolution

### Phase 1
Sidebar + Topbar + Main Surface

### Phase 2
Organization and Workspace switchers

### Phase 3
Contextual right panel

### Phase 4
Global search and command palette

### Phase 5
Nexa AI contextual assistant

### Phase 6
Resizable and configurable workspace surfaces