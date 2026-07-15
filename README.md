# Bavette

Sitio de Bavette Repostería y Snacks, construido con Astro y Tailwind CSS.

## Desarrollo

```sh
bun install
bun run dev
```

El sitio abre en `https://bavette.localhost` mediante Portless, sin un número de
puerto visible. Portless requiere Node.js 24 o posterior y puede solicitar
permisos la primera vez para instalar su certificado HTTPS local.

Para iniciar Astro directamente en segundo plano, sin Portless:

```sh
astro dev --background
```

Comandos disponibles:

```sh
bun run format
bun run lint
bun run build
```

## Contenido del negocio

Los datos que deben confirmar el cliente se encuentran centralizados en
`src/data/site.ts`. Los productos temporales están en `src/pages/index.astro`.
Busca `por confirmar`, `pendiente` y `temporal` antes de publicar.

La página `/politicas/` es un borrador con `noindex` y necesita aprobación del
cliente y, cuando corresponda, revisión legal.

## Producción

Define `SITE_URL` con el dominio final para generar URLs canónicas y metadatos
sociales absolutos:

```sh
SITE_URL=https://dominio.com bun run build
```

El sitemap se genera automáticamente cuando `SITE_URL` está definido. Cuando se
confirme el dominio, agrega su URL del sitemap a `public/robots.txt`.

Antes de lanzar también se deben reemplazar las imágenes remotas de referencia
por fotografías originales optimizadas y convertir `public/social-card.svg` a
PNG de 1200 × 630 para máxima compatibilidad con redes sociales.
