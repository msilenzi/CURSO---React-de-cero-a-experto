async function blobUrlToFile(blobUrl, fileName) {
  const resp = await fetch(blobUrl)
  if (!resp.ok) return
  const blob = await resp.blob()
  return new File([blob], fileName)
}

async function createFileFromUnsavedImages(unsavedImages) {
  return Promise.all(
    unsavedImages.map(({ src, title }) => blobUrlToFile(src, title))
  )
}

async function uploadImage(file) {
  const url = 'https://api.cloudinary.com/v1_1/dpoktqudz/image/upload'

  const formData = new FormData()
  formData.append('upload_preset', 'journal-app')
  formData.append('file', file)

  const resp = await fetch(url, {
    method: 'POST',
    body: formData,
  })

  if (!resp.ok) throw new Error("We couldn't upload the image")

  const data = await resp.json()

  return { title: file.name, src: data.secure_url }
}

async function uploadUnsavedImages(unsavedImages) {
  if (unsavedImages.length === 0) return []
  const files = await createFileFromUnsavedImages(unsavedImages)
  return Promise.all(files.map(uploadImage))
}

export default uploadUnsavedImages
