/* 
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in 
an artist name and an album title, and it should return a Object containing these two pieces of information. Use the 
function to make three dictionaries representing different albums. Print each return value to show that Objects are 
storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number 
of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s 
Object. Make at least one new function call that includes the number of tracks on an album. 
*/

function make_album(artist, title, tracks=null){
    const album = {
        "artist": artist,
        "title": title
    }
    if (tracks !== null){
        album["tracks"] = tracks
    }
    return album
}
// Call make_album() to create three album dictionaries
const a = make_album ("Arijit", "Khamoshian")
const b = make_album ("Atif","Adat", 7);
const c = make_album ("Jubin","Hamnava", 15); 
// Print the album dictionaries
console.log(a);
console.log(b);
console.log(c);


