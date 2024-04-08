const handleComments = (comments) => {
  const rootComments = []
  const commentsByParentId = {}
  comments.forEach((comment) => {
    if (comment.parent_id === null) {
      rootComments.push(comment)
    } else {
      commentsByParentId[comment.parent_id] ||= []
      commentsByParentId[comment.parent_id].push(comment)
    }
  })

  const getRepliesById = (id) => commentsByParentId[id] || []

  return { rootComments, getRepliesById }
}

export { handleComments }
