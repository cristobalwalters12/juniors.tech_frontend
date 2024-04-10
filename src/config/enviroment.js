export const enableMocks = async () => {
  if (import.meta.VITE_NODE_ENV !== 'development') {
    return
  }
  const { browser } = await import('../../__mocks__/browser')
  await browser.start()
}
