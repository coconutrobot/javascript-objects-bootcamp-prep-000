var playlist = { 
  Bono: "Streets", 
  Jewel: "Song",
};

function updatePlaylist(playlist, Mumford, Babel) {
  
  playlist[Mumford] = Babel;
  
  return obj;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Jewel;
  return playlist;
}