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
function loadImages(e) {
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


/* display the loaded images, */
function showContent(data) {
    console.log(data);
    let content = "";
    const imageSection = document.querySelector(".image-gallery");
    
    /* make sure that i does not exceed the number of results per page
        check the per_page value in the url before adjusting for loop */
    for (let i=0; i < 10; i++) {
        content += "<article>";
        
        content += "<img src='" + data.results[i].urls.small + "'";
        content += "srcset='" + data.results[i].urls.small + " 400w, ";
        content += data.results[i].urls.regular + " 1080w, ";
        content += data.results[i].urls.full + " 3504w'";
        content += "sizes='(max-width: 600px) 100vw, ";
        content += "(max-width: 800px) 50vw, ";
        content += "33vw'";
        content += " alt='" + query + " photo by " + data.results[i].user.name + "'>";
        // include link back to photographer, follow attribution guideline
        content += "<p><a href='" + data.results[i].user.links.html + 
            "?utm_source=image_gallery&utm_medium=referral'>" + data.results[i].user.name + "</a></p>";
        content += "<p>" + data.results[i].likes + "</p>";
        content += "</article>";
    }
    
    imageSection.innerHTML = content;
}