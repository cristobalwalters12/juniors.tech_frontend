export const enableMocks = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
  const { browser } = await import('../../__mocks__/browser')
  await browser.start()
}
