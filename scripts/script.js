const appID = "359487dd6dc4bc12070cc4fa97a7ad7720afc3586bed232a673fde6ad5725608";
const secret = "e41d209d1dcc7c7e84abc96a4449f102f3efbb4cc4c86253e0a9b40875208b6c";
const api_endpoint = "https://api.unsplash.com/search/photos/?";
const query = "clouds";
// orientation is optional and can be landscape, portrait, or squarish
const squareShape = "&orientation=sqaurish";
// per_page is optional, default 10
// const limit9 = "&per_page=9";

const url = api_endpoint + "client_id=" + appID + "&query=" + query;


/***** Load images by using fetch *****/
function loadImages() {
    fetch(url) 
    .then(response => response.json())
    .then(results => {
        showContent(results);
    })
    .catch(function(error) {
        console.log(error);
    }); 
}

// add event listener to load images on load
window.addEventListener('load', loadImages, false);


/* display the loaded images,
    only load 12 for now */
function showContent(data) {
    
    let content = "";
    const imageSection = document.querySelector(".image-gallery");
    
    for (let i=0; i < 12; i++) {
        content += "<article>";
        content += "<img src='" + data.results[i].urls.full + "' alt='" + query + " photo by " + data.results[i].user.name + "'>";
        content += "<p>" + data.results[i].user.name + "</p>";
        content += "<p>" + data.results[i].likes + "</p>";
        content += "</article>";
    }
    
    imageSection.innerHTML = content;
}