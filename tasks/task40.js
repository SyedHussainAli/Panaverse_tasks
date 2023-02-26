// Define the makeAlbum function with an optional parameter
function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
// Call the makeAlbum function to create three albums
var album1 = makeAlbum("The Beatles", "Abbey Road");
var album2 = makeAlbum("Pink Floyd", "The Wall", 26);
var album3 = makeAlbum("Led Zeppelin", "IV", 8);
// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);
