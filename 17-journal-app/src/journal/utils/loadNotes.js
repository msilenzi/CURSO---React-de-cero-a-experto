import { collection, getDocs } from 'firebase/firestore/lite'
import { firebaseDB } from 'firebase/config'

async function loadNotes(uid) {
  const collectionRef = collection(firebaseDB, `${uid}/journal/notes`)
  const docs = await getDocs(collectionRef)

  const notes = []
  docs.forEach((doc) => notes.push({ id: doc.id, ...doc.data() }))
  return notes
}

export default loadNotes
