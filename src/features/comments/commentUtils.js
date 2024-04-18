const handleComments = (comments) => {
  if (!comments) return
  const rootComments = []
  const commentsByParentId = {}
  comments.forEach((comment) => {
    const { parentId, postId } = comment
    if (parentId === postId) {
      rootComments.push(comment)
    } else {
      commentsByParentId[parentId] ||= []
      commentsByParentId[parentId].push(comment)
    }
  })

  const getRepliesById = (id) => commentsByParentId[id] || []

  return { rootComments, getRepliesById }
}

export { handleComments }
