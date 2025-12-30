import { lazy } from 'react'

export function safeLazy(importer, exportName) {
  return lazy(() =>
    importer().then(mod => {
      const comp = exportName ? (mod[exportName] || mod.default) : (mod.default || mod[exportName] || mod);
      if (!comp) {
        console.error('safeLazy: module did not export a component', { exportName, mod });
        throw new Error(`safeLazy: module did not export a component for "${exportName || 'default'}"`);
      }
      return { default: comp };
    })
  );
}
