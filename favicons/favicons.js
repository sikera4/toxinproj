function importAll(r) {
    r.keys().forEach(r)
}
importAll(require.context('./', true, /\.(svg|png|ico|xml|json|webmanifest)$/i));