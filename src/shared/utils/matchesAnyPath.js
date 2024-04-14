const matchesAnyPath = (pathname, pathOrPaths) => {
  if (typeof pathOrPaths === 'string') {
    return pathname === pathOrPaths
  }
  const allowedPaths = pathOrPaths.join('|')
  return RegExp(`(${allowedPaths}).*`).test(pathname)
}

export { matchesAnyPath }
