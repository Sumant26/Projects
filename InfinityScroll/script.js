const imageContainer = document.getElementById(`image-container`);
const loader = document.getElementById(`loader`);

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const  count = 30;
const apiKey = `BCHmYWn0jEM7veLAHxZarXhF4UPjU7fH7dj5JXDjIbg`;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded

function imageLoaded(){
    console.log(`Image Loaded`);
    imagesLoaded++;
    console.log(imagesLoaded);
    if(imagesLoaded === totalImages){
        ready = true;
        loader.hidden = true;
        console.log(`ready=`,ready);
    }
}

// Helper function to set  Attributes  on DOM Elements

function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements for links & Photos, Add to DOM

function displayPhotos(){
    imagesLoaded = 0;
    totalImages = photosArray.length;
    console.log(`totalImages`, totalImages);
    // Run function for each object in photosArray
    photosArray.forEach((photo) =>{
        // Create <a> to link to Unsplash
        const item = document.createElement(`a`);
       
        setAttributes(item, {
            href: photo.links.html,
            target: `_blank`,
        });
        // Create image for photo
        const img = document.createElement(`img`);
        
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Event Listener, Check when each is loading

        img.addEventListener(`load`,imageLoaded);
        // Put <img> inside <a> then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


// Get photos from Unsplash API

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
        
    }catch(error){
        // Catch error here
    }
}

//  Check to see if scrolling near bottom of page, Load More Photos

window.addEventListener(`scroll`,() =>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        getPhotos();
    }
})

// On Load

getPhotos();