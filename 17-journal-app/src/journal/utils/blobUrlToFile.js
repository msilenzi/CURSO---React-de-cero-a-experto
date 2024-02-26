async function blobUrlToFile(blobUrl, fileName) {
  const resp = await fetch(blobUrl)
  if (!resp.ok) return
  const blob = await resp.blob()
  return new File([blob], fileName)
}

export default blobUrlToFile
