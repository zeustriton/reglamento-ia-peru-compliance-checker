# Perú IA Compliance Platform

Plataforma corporativa de nivel C-Level para el análisis, evaluación y cumplimiento del Reglamento de Inteligencia Artificial de Perú (Decreto Supremo Nº 115-2025-PCM).

## 🚀 Características Principales

### 📋 Compliance Checker
- Evaluación interactiva del nivel de cumplimiento
- Preguntas adaptativas según tipo de organización
- Informes detallados con recomendaciones personalizadas
- Plazos y próximos pasos específicos

### 📅 Gestión de Plazos
- Timeline visual de implementación gradual
- Cronogramas diferenciados para sector público y privado
- Alertas automáticas de fechas límite
- Hitos críticos del reglamento

### 📚 Contenido del Reglamento
- Acceso completo al Decreto Supremo 115-2025-PCM
- Navegación dinámica por títulos y artículos
- Búsqueda avanzada con filtros
- Principios rectores explicados detalladamente

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4
- **Componentes**: shadcn/ui (New York style)
- **Base de Datos**: Prisma con SQLite
- **Estado**: Zustand y TanStack Query

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx                    # Página principal
│   ├── compliance/page.tsx          # Evaluación de cumplimiento
│   ├── plazos/page.tsx             # Gestión de plazos
│   ├── reglamento/page.tsx          # Contenido del reglamento
│   └── layout.tsx                  # Layout principal
├── components/
│   ├── ui/                         # Componentes shadcn/ui
│   └── navigation.tsx              # Navegación principal
├── hooks/                          # Hooks personalizados
└── lib/                           # Utilidades y configuración
```

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd peru-ia-compliance

# Instalar dependencias
npm install

# Configurar base de datos
npm run db:push

# Iniciar servidor de desarrollo
npm run dev
```

### Variables de Entorno
```bash
# Esta aplicación no requiere variables de entorno obligatorias
# Funciona completamente en el cliente sin configuración adicional

# Si deseas personalizar alguna configuración, puedes crear .env.local:
cp .env.example .env.local
```

## 📱 Uso de la Aplicación

### 1. Evaluación de Compliance
1. Accede a `/compliance`
2. Responde el cuestionario adaptativo
3. Recibe un informe detallado con tu nivel de cumplimiento
4. Obtén recomendaciones específicas y plazos

### 2. Gestión de Plazos
1. Navega a `/plazos`
2. Consulta el timeline de implementación
3. Configura alertas personalizadas
4. Descarga guías de implementación

### 3. Contenido Regulatorio
1. Visita `/reglamento`
2. Explora los 6 títulos y 36 artículos
3. Utiliza búsqueda avanzada
4. Consulta principios rectores

## 🏗️ Arquitectura

### Componentes Principales
- **Navigation**: Navegación responsive con efectos de scroll
- **Compliance Checker**: Sistema de evaluación con validación progresiva
- **Timeline**: Componente interactivo para gestión de plazos
- **Reglamento**: Navegación dinámica con búsqueda y filtros

### Estado y Datos
- **Zustand**: Estado global de la aplicación
- **TanStack Query**: Caché y sincronización de datos
- **Prisma**: ORM para gestión de base de datos

## 🎨 Diseño y UX

### Principios de Diseño
- **C-Level**: Interfaz profesional y corporativa
- **Responsive**: Experiencia óptima en todos los dispositivos
- **Accesible**: Cumplimiento de WCAG 2.1 AA
- **Intuitivo**: Navegación clara y flujo lógico

### Paleta de Colores
- **Primario**: Azul corporativo (#3b82f6)
- **Secundario**: Verde éxito (#10b981)
- **Advertencia**: Ámber (#f59e0b)
- **Error**: Rojo (#ef4444)
- **Neutros**: Escala de grises slate

## 📊 Métricas y Analytics

La aplicación incluye seguimiento de:
- Tasa de finalización de evaluaciones
- Tiempo promedio por sección
- Puntuaciones de cumplimiento por sector
- Uso de funcionalidades principales

## 🔒 Seguridad

- **Autenticación**: NextAuth.js con múltiples proveedores
- **Validación**: Zod para validación de datos
- **Sanitización**: Protección contra XSS e inyección
- **Headers**: Seguridad HTTP configurada

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Build Estático
```bash
# Construir para producción
npm run build

# Iniciar servidor
npm start
```

## 🤝 Contribución

### Flujo de Trabajo
1. Fork del proyecto
2. Crear feature branch (`git checkout -b feature/amazing-feature`)
3. Commit de cambios (`git commit -m 'Add amazing feature'`)
4. Push al branch (`git push origin feature/amazing-feature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto es un ejercicio técnico-académico con fines demostrativos y pedagógicos. No representa una herramienta oficial ni constituye dictamen vinculante sobre la gestión de las entidades referenciadas.

## 👤 Autor

**Roberto Puyó - Kepler Blacklock**
- LinkedIn: [https://www.linkedin.com/in/robertopuyo/](https://www.linkedin.com/in/robertopuyo/)
- Desarrollador independiente especializado en plataformas corporativas de compliance y análisis regulatorio.

## ⚖️ Disclaimer

**Naturaleza del Contenido:** Este software constituye un ejercicio técnico-académico con fines estrictamente demostrativos y pedagógicos. No representa una herramienta oficial ni constituye dictamen vinculante sobre la gestión de las entidades referenciadas.

**Fuentes de Información:** El desarrollo se fundamenta exclusivamente en información pública y documentación de acceso abierto (OSINT). No se ha utilizado, consultado ni revelado información confidencial, reservada o privilegiada.

**Opinión Personal:** El contenido, análisis y conclusiones son a título estrictamente personal del autor como desarrollador independiente. No representan la postura oficial ni políticas de entidad estatal alguna.

## 📞 Contacto

Para consultas o colaboraciones:
- LinkedIn: [https://www.linkedin.com/in/robertopuyo/](https://www.linkedin.com/in/robertopuyo/)
- Email: A través de LinkedIn

---

**© 2025 Perú IA Compliance Platform. Desarrollado por Roberto Puyó - Kepler Blacklock.**