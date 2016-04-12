console.log('hi there')
var key = 'OQGIY63FYVI7UT842'

  var getMusic = function() {
      $.getJSON('http://developer.echonest.com/api/v4/artist/songs?api_key=OQGIY63FYVI7UT842&id=ARSZ6MA1187FB43D29&format=json&start=0&results=100', function(data) {
          console.log('response', data.response.songs)
      })
  }

  getMusic()


  // match artist with :id
  // get all songs from artist  >>> GET /artists/:id/songs?per_page=
        //ex: artists/16775/songs?per_page=100
  // collect all ids from songs returned
  // for each song collect all sampled songs, associated artists
  // for each song id  GET all referants
   // collect all referant ids
      // for each referant id GET all annotations
        // collect all annotation ids
      // for each annotation, get content of body
      // scan content body, pull out any matching artists
