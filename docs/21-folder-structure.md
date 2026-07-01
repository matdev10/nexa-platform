# Nexa Platform

# Folder Structure

Versión: 1.0

---

# Objetivo

Definir la estructura oficial del proyecto.

Toda nueva carpeta deberá respetar esta organización.

---

# Frontend

src/

app/

core/

shared/

apps/

integrations/

assets/

environments/

---

# Core

Contiene el corazón de la plataforma.

core/

authentication/

organizations/

users/

roles/

permissions/

layout/

services/

guards/

models/

---

# Shared

Componentes reutilizables.

shared/

components/

directives/

pipes/

utils/

styles/

---

# Apps

Cada carpeta representa una App independiente.

apps/

dashboard/

crm/

clients/

quotes/

sales/

inventory/

projects/

payments/

reports/

settings/

marketplace/

ai/

---

# Integrations

Conectores externos.

integrations/

mercado-pago/

stripe/

google/

whatsapp/

shopify/

openai/

---

# Assets

assets/

images/

icons/

fonts/

logos/

---

# Principios

Una carpeta representa un dominio.

No crear carpetas:

- pruebas
- nuevo
- temporal
- copia
- final

Toda carpeta debe tener una responsabilidad clara.