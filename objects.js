var playlist = {
  artistName: `songtitle`
}
function updatePlaylist(obj, aName, sTitle) {
  return Object.assign({}, obj, {[aName]:sTitle})
}
