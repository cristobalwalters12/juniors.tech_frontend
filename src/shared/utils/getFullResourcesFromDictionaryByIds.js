const getFullResourcesFromDictionaryByIds = ({ ids, dictionary, total }) => {
  const resourcesIds = new Set(ids.slice(0, total))
  const fullResources = []

  if (resourcesIds.size > 0) {
    for (const resource of dictionary) {
      if (resourcesIds.size === 0) break
      if (resourcesIds.has(resource.value)) {
        resourcesIds.delete(resource.value)
        fullResources.push(resource)
      }
    }
  }
  return fullResources
}

export default getFullResourcesFromDictionaryByIds
