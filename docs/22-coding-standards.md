# Nexa Platform

# Coding Standards

Versión: 1.0

---

# Objetivo

Definir los estándares oficiales de desarrollo.

---

# Idioma

Código:

Inglés

Documentación:

Español

Interfaz:

Según idioma del usuario.

---

# Nombres

Clases

PascalCase

Ejemplo

OrganizationService

---

Interfaces

PascalCase

Ejemplo

Organization

---

Variables

camelCase

Ejemplo

activeOrganization

---

Métodos

camelCase

Ejemplo

createOrganization()

---

Constantes

UPPER_CASE

Ejemplo

MAX_USERS

---

Archivos

kebab-case

Ejemplo

organization-context.service.ts

---

Carpetas

kebab-case

Ejemplo

organization-selector

---

# Componentes

Un componente = una responsabilidad.

---

# Servicios

Los servicios contienen lógica.

Los componentes muestran información.

---

# Comentarios

Comentar únicamente cuando aporte contexto.

No comentar código obvio.

---

# Imports

Orden

Angular

↓

Terceros

↓

Core

↓

Shared

↓

Apps

↓

Locales

---

# CSS

Utilizar SCSS.

No utilizar estilos inline.

---

# Responsive

Desktop First.

Breakpoints definidos globalmente.

---

# Git

Commits pequeños.

Mensajes claros.

Ejemplo

feat(auth): add register page

fix(users): correct permissions

docs(core): update architecture

---

# Calidad

Todo código nuevo debe ser:

- legible
- reutilizable
- documentado
- probado

---

# Regla principal

El código debe ser fácil de leer.

La persona más importante que leerá el código eres tú dentro de seis meses.