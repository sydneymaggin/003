
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
//console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "key3tVcwkhimDkISL"}).base(
    "appFpwv8sYbvi3Kwl"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("playlist").select({}).eachPage(gotPageOfSongs,gotAllSongs);

// empty array to hold our data
var songs = [];

// callback function that receives our data
function gotPageOfSongs(records, fetchNextPage) {
    console.log("gotPageOfSongs()");
    // add the records from this page to our array
    songs.push(...records);
    // request more pages
    fetchNextPage();
  }

  // call back function that is called when all pages are loaded
function gotAllSongs(err) {
  console.log("gotAllSongs()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading songs");
    console.error(err);
    return;
  }

  // call functions to log and show the songs
  consoleLogSongs();
  showSongs();
}

// just loop through the songs and console.log them
function consoleLogSongs() {
    console.log("consoleLogSongs()");
    songs.forEach((song) => {
      console.log("Song:", song);
    });
  }

  // loop through the songs, create an h2 for each one, and add it to the page
function showSongs() {
    console.log("showSongs()");
    songs.forEach((song) => {

  //       var songTitle = document.createElement("h1");
  //       songTitle.innerText = song.fields.title;
  //       document.body.append(songTitle);


  //   var albumCover = document.createElement("img");
  //     albumCover.src = song.fields.cover[0].url;
  //     document.body.append(albumCover);


  //this is where song info goes
        var songContainer = document.createElement("div");
        songContainer.classList.add("song-container");
        document.querySelector(".container").append(songContainer);

      //add image to our song container

      var songCover = document.createElement("img");
      songCover.classList.add("song-cover");
      songCover.src = song.fields.cover[0].url;
      songContainer.append(songCover);


     //add title to our song container
      var songTitle = document.createElement("h1");
      songTitle.classList.add("song-title");
      songTitle.innerText = song.fields.title;
      songContainer.append(songTitle);

      //add artists to our song container
      var songArtist = document.createElement("h1");
      songArtist.classList.add("song-artist");
      songArtist.innerText = song.fields.artist;
      songContainer.append(songArtist);
    


      //add album to our song container
      var songAlbum = document.createElement("h1");
      songAlbum.classList.add("song-album");
      songAlbum.innerText = song.fields.album;
      songContainer.append(songAlbum);


            //add rating to our song container
            var songRating = document.createElement("h1");
            songRating.classList.add("song-rating");
            songRating.innerText = song.fields.rating;
            songContainer.append(songRating);





      //add event listener
      //when user clicks on song container
      //image and rating will appear or disappear
      songContainer.addEventListener("click", function(){
      songRating.classList.toggle("active");
      songCover.classList.toggle("active");
      songAlbum.classList.toggle("active");
      songArtist.classList.toggle("active");
      songTitle.classList.toggle("active");
      })


      // get genre field from Airtable
      // loop through the array and add each genre as 
      // a class to the song container

      var songActivity = song.fields.activity;
      songActivity.forEach(function(genre){
        songContainer.classList.add(genre)
      })

      //add event listener to our filter
      //to add an active class to our song


      //clicking on filter by bedtime
      //change bedtime songs to red
      var filterBedtime = document.querySelector(".bedtime");
      filterBedtime.addEventListener("click", function(){

        if (songContainer.classList.contains("bedtime")){
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }    
      })


      //clicking on filter by coding
      //change coding songs to red
      var filterCoding = document.querySelector(".coding");
      filterCoding.addEventListener("click", function(){

        if (songContainer.classList.contains("coding")){
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }    
      })

      //clicking on filter by commuting
      //change commuting songs to red
      var filterCommuting = document.querySelector(".commuting");
      filterCommuting.addEventListener("click", function(){

        if (songContainer.classList.contains("commuting")){
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }    
      })

      //clicking on filter by eating
      //change eating songs to red
      var filterEating = document.querySelector(".eating");
      filterEating.addEventListener("click", function(){

        if (songContainer.classList.contains("eating")){
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }    
      })


      //clicking on filter by exercising
      //change exercising songs to red
      var filterExercising = document.querySelector(".exercising");
      filterExercising.addEventListener("click", function(){

        if (songContainer.classList.contains("exercising")){
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }    
      })

      //clicking on filter by painting
      //change painting songs to red
      var filterPainting = document.querySelector(".painting");
      filterPainting.addEventListener("click", function(){

        if (songContainer.classList.contains("painting")){
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }    
      })

      //clicking on filter by partying
      //change partying songs to red
      var filterPartying = document.querySelector(".partying");
      filterPartying.addEventListener("click", function(){

        if (songContainer.classList.contains("partying")){
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }    
      })

      //clicking on filter by reading
      //change reading songs to red
      var filterReading = document.querySelector(".reading");
      filterReading.addEventListener("click", function(){

        if (songContainer.classList.contains("reading")){
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }    
      })

    


      //clicking on filter by reflecting
      //change reflecting songs to red
      var filterReflecting = document.querySelector(".reflecting");
      filterReflecting.addEventListener("click", function(){

        if (songContainer.classList.contains("reflecting")){
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }    
      })

      //clicking on filter by relaxing
      //change relaxing songs to red
      var filterRelaxing = document.querySelector(".relaxing");
      filterRelaxing.addEventListener("click", function(){

        if (songContainer.classList.contains("relaxing")){
          songContainer.style.display = "block";
        } else {
          songContainer.style.display = "none";
        }    
      })

    















      var filterReset = document.querySelector(".js-reset")
      filterReset.addEventListener("click", function(){
        songContainer.style.display = "block";
      })





    });
  }

