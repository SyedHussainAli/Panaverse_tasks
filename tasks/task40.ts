// Define the makeAlbum function with an optional parameter
function makeAlbum(artist: string, title: string, tracks?: number): object {
    const album = {
      artist: artist,
      title: title
    
    };
    
    if (tracks) {
      album["tracks"] = tracks;
    }
    
    return album;
  }
  
  // Call the makeAlbum function to create three albums
  const album1 = makeAlbum("The Beatles", "Abbey Road");
  const album2 = makeAlbum("Pink Floyd", "The Wall", 26);
  const album3 = makeAlbum("Led Zeppelin", "IV", 8);
  
  // Print the album information
  console.log(album1);
  console.log(album2);
  console.log(album3);