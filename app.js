let searchInput = document.getElementById('searchInput');
let rsultContainer = document.getElementById('rsultContainer');
let searchBtn = document.getElementById('searchBtn');

let searchTime = 0;
let allData = '';
let tmp = '';

function findResults(searchWord) {
    let url = `https://itunes.apple.com/search?term=${searchWord}`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        allData = data;
       data.results.map((element) => {
        rsultContainer.innerHTML = '';
        console.log(element)
        tmp = `<div class='artist'>
                    <img class="artistImage" src="${element.artworkUrl100}">
                    <div class='tittle' >
                        <a href=${element.artistViewUrl} target='_blank' >${element.artistName}</a>
                    </div>
                    <div class="trackPreview">Preview ${element.artistName} Track</div>
                    <audio controls>
                         <source src="${element.previewUrl}">
                     </audio>
              </div>`;
              
        rsultContainer.innerHTML += tmp;
        

    })})
    .catch((error) => {
        console.log('error')
    })
};

        
function showSongs(data) {
    data = allData;
    
     tmp = `<tr class="firstrow">
                 <th>Song</th>
                 <th>Artist</th>
                 <th>Music Id</th>
                 <th>Quick Preview Track</th>
                 <th>Result:${data.resultCount}</th>
             </tr>`;
  data.results.map((track) => {
   tmp += `<tr class='song'>
     <th class='tittle'>
             ${track.trackName}
             <img src="${track.artworkUrl160}>"
     </th>
     <th class='artist'>
       <a href=${track.artistViewUrl} target='_blank' >${track.artistName}</a>
     </th>
     <th class='id'>${track.collectionId}</th>
     <th class='audio'>
         <audio controls>
              <source src="${track.previewUrl}">
          </audio>
     </th>
     <th><a class='openSong' target='_blank' href="${track.trackViewUrl}" >Open Song</a></th>
     </tr>`
 })

 rsultContainer.textContent = '';
 rsultContainer.innerHTML = `<table class='table'>` + tmp + `</table>` ;
 }

 searchBtn.addEventListener('click', showSongs);

 
window.onload = () => {
    searchInput.addEventListener('keydown', () => {

        if(searchInput.value.trim().length === 0) {
            return;
        }
        clearInterval(searchTime);
        searchTime = setTimeout(() => {
            findResults(searchInput.value)
        }, 300)
    })
}
