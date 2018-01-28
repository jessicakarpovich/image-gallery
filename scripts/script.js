const appID = "359487dd6dc4bc12070cc4fa97a7ad7720afc3586bed232a673fde6ad5725608";
const api_endpoint = "https://api.unsplash.com/search/photos/?";
const query = "clouds";
// orientation is optional and can be landscape, portrait, or squarish
const orientation = "&orientation=landscape";
// per_page is optional, default 10
const limit = "&per_page=12";

const url = api_endpoint + "client_id=" + appID + "&query=" + query + limit + orientation;


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
    let content = "";
    const imageSection = document.querySelector(".image-gallery");
    
    /* make sure that i does not exceed the number of results per page
        check the per_page value in the url before adjusting for loop */
    for (let i=0; i < 12; i++) {
        content += "<article>";
        
        content += "<img src='" + data.results[i].urls.small + "'";
        content += "srcset='" + data.results[i].urls.full + " 3504w, ";
        content += data.results[i].urls.regular + " 1080w, ";
        content += data.results[i].urls.small + " 400w'";
        content += "sizes='(min-width: 32em) 100vw, ";
        content += "(min-width: 60.1em) calc((100vw - 4rem )/ 2), ";
        content += "calc((100vw - 6rem) / 3)'";
        
        content += " alt='" + query + " photo by " + data.results[i].user.name + "'>";
        
        // include link back to photographer, follow attribution guideline
        content += "<div class=photo-info>";
        content += "<p class='author'><a href='" + data.results[i].user.links.html + 
            "?utm_source=image_gallery&utm_medium=referral'>" + data.results[i].user.name + "</a></p>";
        content += "<p class='likes'>" + data.results[i].likes + "</p>";
        content += "</div>";
        content += "</article>";
    }
    
    imageSection.innerHTML = content;
}


/***** Animation Events *****/
/* On click, change color of quote and logo text by adding class nane */
const logo = document.querySelector('.logo');
const text = document.querySelector('q');

logo.addEventListener('click', 
                      () => { text.classList.add('changeCol');
                              logo.classList.add('changeCol'); }, 
                      false);