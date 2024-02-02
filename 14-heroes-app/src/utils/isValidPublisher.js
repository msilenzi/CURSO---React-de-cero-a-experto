const validPublishers = ['DC Comics', 'Marvel Comics']

function isValidPublisher(publisher) {
  return validPublishers.includes(publisher)
}

export { isValidPublisher }
