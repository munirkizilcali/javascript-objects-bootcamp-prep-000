var playlist = {
  artistName: `songtitle`
}
function updatePlaylist(obj, aName, sTitle) {
  return Object.assign({}, obj, {[aName]:sTitle})
}
function removeFromPlaylist(obj, aName) {
  return obj.[aName]
  //return obj
}

console.log(removeFromPlaylist(playlist,`artistName`))