/* global $ */

// BELOW Update the songs array with four of your favorites songs.
//var songs = ["Mood", "Valentino", "Circles", "Eastside"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
//var artists = ["Ian Dior, 24kGoldn", "24kGoldn", "Post Malone", "Benny Blanco, Halsey, Khalid"];
// Make sure they match the same order as your array above
//var imageLinks = ["https://images.hungama.com/c/1/6ec/8e8/47971675/47971675_300x300.jpg", "https://i.ytimg.com/vi/c3_Ia2CaO8k/maxresdefault.jpg", "https://headlineplanet.com/home/wp-content/uploads/2019/12/Post-Malone-Circles-1280x720.jpg", "https://img.youtube.com/vi/56WBK4ZK_cw/hqdefault.jpg"]; 

//var songLengths = ["2:19", "3:01", "3:46", "2:55"];

//var links = ["https://www.youtube.com/watch?v=0jSpCxmb2VQ", "https://www.youtube.com/watch?v=c3_Ia2CaO8k", "https://www.youtube.com/watch?v=wXhTHyIgQ_U", "https://www.youtube.com/watch?v=56WBK4ZK_cw"];

//function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
 
  /* for (let name of songs){
    $("#songs").append("<p>" + name + "</p>");
  }
  
  for (let names of artists) {
$("#artists").append("<p>" + names + "</p>");
}
  
  for (let img of imageLinks) {
$("#images").append("<img src=\"" +img+ "\">");

}
  
  for (let link of links) {
$("#links").append("<p>"+ link + "</p>");
}

  for (length of songLengths) {
    $("#lengths").append("<p>" + length + "</p>");
  }
  
}
*/

// objects
var songData1 = {
  song: 'Mood',
  songArtist: 'Ian Dior',
  image: 'https://images.hungama.com/c/1/6ec/8e8/47971675/47971675_300x300.jpg',
  link:'https://www.youtube.com/watch?v=0jSpCxmb2VQ',
  songLength: 219
};

var songData2 = {
    song: 'Valentino',
    songArtist: '24kGoldn',
    image: 'https://i.ytimg.com/vi/c3_Ia2CaO8k/maxresdefault.jpg',
    link: 'https://www.youtube.com/watch?v=c3_Ia2CaO8k',
    songLength: 346
};

var songData3 = {
    song: 'Circles',
    songArtist: 'Post Malone',
    image: 'https://headlineplanet.com/home/wp-content/uploads/2019/12/Post-Malone-Circles-1280x720.jpg',
    link: 'https://www.youtube.com/watch?v=wXhTHyIgQ_U',
    songLength: 301,
};

var songData4 = {
  song: 'Eastside',
  songArtist: 'Benny Blanco, Halsey, Khalid',
  image: "https://img.youtube.com/vi/56WBK4ZK_cw/hqdefault.jpg",
  link:"https://www.youtube.com/watch?v=56WBK4ZK_cw",
  songLength: 255
};

var playlist = [songData1, songData2, songData3, songData4];


function emptySongInfo(){
  // Use jQuery to empty all of the remaining divs
  $("#songs").empty();
  $("#artists").empty();
  $("#lengths").empty();
  $("#images").empty();
  $("#links").empty();
  }    

function displaySongInfo(){
  emptySongInfo();
  
  for(let data of playlist) {
  $("#songs").append("<p>" + data.song + "</p>");
  $("#artists").append("<p>" + data.songArtist + "</p>");
  $("#lengths").append("<p>" + data.songLength + "</p>");
  $("#images").append(`<img src="${data.image}" alt="Album cover image" width="50" height="50">`);
  $("#links").append(`<a href="${data.link}">Listen</a>`);
}
  
}

function addSongInfo(){
// BELOW write the code to add new items to each of the arrays.
let newSongName = $('#song').val();
let newImageURL = $('#image').val();
let newArtistName = $("#artist").val();
let newSongLength = $('#length').val();
let newSongLinks = $('#links').val();     

  
let songData = {} 
songData.song = newSongName;
songData.songArtist = newArtistName;
songData.songLength = newSongLength;
songData.image = newImageURL;
songData.link = newSongLinks;

playlist.push(songData);
  
                                    
                                    
}



$("#add").click(function(){
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

// $("#add").click(function() {
//     emptySongInfo();
//     addSongInfo();
//     displaySongInfo();
// }


    
displaySongInfo();


$("#remove").click(function(){
playlist.splice($("#removeInput").val() - 1, 1);
displaySongInfo();
});




