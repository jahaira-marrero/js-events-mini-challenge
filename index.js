/***** Deliverable 1 *****/
// Find the header.
const header = document.querySelector("#header")
// console.log("Here's your header:", header)
// header.addEventListener("click", function() {
//     if (header.style.color === "green") {
//         header.style.color = "black"
//     } else {
//         header.style.color = "green"
//     }
// })

/***** Deliverable 2 *****/
// Update the color of the header.
header.style.color = "green"



/***** Deliverable 3 *****/
// Find each element of the traveler and update each photo, nickname, name, etc.
console.log('This is what the traveler object looks like: ', traveler)

const profileImg = document.querySelector("#profile img")
profileImg.src = traveler.photo
profileImg.alt = traveler.name

const profileH2 = document.querySelector("#profile h2")
profileH2.textContent = traveler.name

const profileEm = document.querySelector("#profile em")
profileEm.textContent = traveler.nickname

const likes = document.querySelector("#profile .likes")
likes.textContent = `${traveler.likes} Likes`


/***** Deliverable 4 *****/
// Iterate through each animal sighting and for each one render one post.
function renderAnimalSightingPost (animalObject) {
    const li = document.createElement("li")
    li.dataset.id = animalObject.id

    const p = document.createElement("p")
    p.textContent = animalObject.description

    const img = document.createElement("img")
    img.src = animalObject.photo
    img.alt = animalObject.species

    const a = document.createElement("a")
    a.href = animalObject.link
    a.target = "_blank"
    a.textContent = `Here's a video about the ${animalObject.species} species!`

    li.append(p, img, a)

    const animalsUl = document.querySelector("#animals")
    animalsUl.append(li)
}

traveler.animalSightings.forEach(function (animalSightinObject) {
    renderAnimalSightingPost(animalSightinObject)
})

/***** Deliverable 5 *****/
// Find the animal data with the number ID of 3 and remove it.
const animalToRemove = document.querySelector("[data-id='3']")
animalToRemove.remove()

/***** End of Starter Code *****/
/************************** EVENTS JS MINI CHALLENGE ******************************/

/***** Deliverable 1 *****/
function toggleColor(element) {
    if (element.style.color === "green") {
        element.style.color = "red"
    } else {
        element.style.color = "green"
    } 
}
header.addEventListener('click', function (event) {
    toggleColor(event.target)})

/***** Deliverable 2 *****/
// Add a like button feature.
// Here I'm looking for the like button by the class.
const likeButton = document.querySelector('.like-button')
likeButton.addEventListener('click', function(event) {
    // We got to the likes from from the traveler const in the other file.
    // So every time there's a click, the number of likes with increase
    traveler.likes += 1
    console.log(likes)
    // Here we are updating the text content of likes.
    likes.textContent = `${traveler.likes} likes`
})

/***** Deliverable 3 *****/
// 1. locate form using JS
// 2. add and eventListener with submit
// 3. pass the data to a function
// 4. the function will push this data to the card for a new animal Sighting
const form = document.querySelector('#new-animal-sighting-form')

form.addEventListener['submit', function (event) {
    event.preventDefault()
// You get this in the elements tab and find the name= for each of the attribute id name.
    const speciesInput = event.target.species.value
    const videoInput = event.target.link.value
    const photoInput = event.target.photo.value
    const descriptionInput = event.target.description.value
//    Create the length to use for new ID
    const length = traveler.animalSightings.length
    // Now the id is equal to the lenght of the array - 1 because the array starts at 0
    const newId = traveler.animalSightings[length - 1].id + 1

    // Now you are assigning the values of the keys.
    const sightingObj = {
        species: speciesInput,
        photo: photoInput,
        link: videoInput,
        description: descriptionInput,
        // We hard coded the travelerID because it's the only one that exists.
        travelerId: 1,
        id: newId
    }
// Now we push this information in and add it to the sighting posts. Both functions were established above.
    traveler.animalSightings.push(sightingObj)
    console.log(traveler.animalSightings)
    renderAnimalSightingPost(sightingObj)

    // event.target.reset()
}]