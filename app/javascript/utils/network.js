export async function isOffline() {
  try {
    const response = await fetch('/ppublic/1px.png', { mode: 'no-cors' })
    return response.status >= 200 && response.status < 300
  } catch (_) {
    return false
  }
}
