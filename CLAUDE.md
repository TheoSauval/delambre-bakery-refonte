# Delambre Bakery — refonte

## Statut du déploiement

Le site est déployé sur Vercel (`delambre-bakery-refonte.vercel.app`) comme
**preview** à montrer au client et à mettre dans le portfolio de Théo — ce
n'est pas le site officiel actuel du client, qui reste en place ailleurs.

Pour éviter tout conflit SEO/duplicate content avec le site officiel, ce
déploiement est volontairement bloqué pour les moteurs de recherche :
- `app/layout.js` → `metadata.robots = { index: false, follow: false }`
- `app/robots.js` → `disallow: "/"`

**Quand ce projet devient le vrai site officiel** (nouveau domaine validé par
le client, bascule DNS définitive), il faut retirer ces deux blocages,
sinon le site restera invisible sur Google indéfiniment.
