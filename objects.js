var playlist = {
  artistName: `songtitle`,
  artist2: `song2`
}
function updatePlaylist(obj, aName, sTitle) {
  return Object.assign({}, obj, {[aName]:sTitle})
}
function removeFromPlaylist(objat, aName) {
  delete objat[aName]
  return objat
}

console.log(removeFromPlaylist(playlist,`artistName`))
console.log(playlist)