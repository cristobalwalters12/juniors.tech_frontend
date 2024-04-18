import { useEffect } from 'react'

const useDocumentTitle = (title, dataFetched = true) => {
  useEffect(() => {
    if (!title) return
    document.title = `${title} - Juniors.tech`
    return () => {
      document.title = 'Juniors.tech'
    }
  }, [title])
}

export { useDocumentTitle }
