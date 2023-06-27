document.addEventListener("mousemove",e =>{
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.clientX - window.innerWidth/2) * 0.005}deg;
            --move-y: ${(e.clientY - window.innerHeight/2) * -0.01}deg;
        `
    })
})


class Image {
    constructor (url, caption, description, href) {
        this.url = url
        this.caption = caption
        this.description = description
        this.href = href
    }
}


let gallery_button_right = document.getElementsByClassName("gallery_button_right")[0]
let gallery_button_left = document.getElementsByClassName("gallery_button_left")[0]
let gallery_cards = document.getElementsByClassName("gallery_cards")[0]
let card_index = 0
let cards = []

let cards_images = [
    new Image(
        "png\\2435495-middle.png",
        "Корова тупорылая",
        "Она реально тупая",
    ),
    new Image(
        "png\\png-clipart-minecraft-story-mode-youtube-bill-cipher-undertale-mine-craft-bill-cipher-fictional-character.png",
        "ХЕРобрин",
        "Он очень страшный",
    ),
    new Image(
        "png\\png-transparent-minecraft-mob-video-game-boss-salmon-salmon-angle-super-mario-bros-boss.png",
        "Тупейший карп",
        "Боже у него нет мозга",
        "test.html",
    ),
    new Image(
        "png\\png-transparent-minecraft-pocket-edition-xbox-360-pig-video-game-pig-angle-animals-wood.png",
        "Грязная свинья",
        "Ужасное зрелище",
    ),
]
for (let i=0; i<3; i++){
    add_card(cards_images[i], "right")
} 


function add_card(image, side){
    let new_card = document.createElement("div")
    new_card.innerHTML = `
        <div class="gallery__card__background"></div>
        <img src="${image.url}" class="gallery__card__pic">
        <h1 class="gallery__card__caption">${image.caption}</h1>
        <h3 class="gallery__card__description">${image.description}</h3>
        <a href="${image.href}">
            <div class="gallery__card__href"></div>
        </a>
    `
    
    new_card.classList.add("gallery__card")

    if (side == "left") {
        cards.unshift(new_card)
        gallery_cards.prepend(new_card)
    }
    else {
        cards.push(new_card)
        gallery_cards.append(new_card)
    }
}

gallery_button_right.addEventListener("click", event => {
    gallery_cards.removeChild(cards[0])
    cards.shift()
    card_index++
    if (card_index > cards_images.length - 1) {
        card_index = 0
    }
    add_card(cards_images[(card_index + 2) % cards_images.length], "left")
})

gallery_button_left.addEventListener("click", event => {
    gallery_cards.removeChild(cards[2])
    cards.pop()
    card_index--
    if (card_index < 0) {
        card_index = cards_images.length - 1
    }
    add_card(cards_images[card_index], "left")
}) 

let bubbles = document.getElementById("bubbles")
for (let i = 0; i < 150 ; i++) {
    let bubble = document.createElement("div")
    bubble.classList.add("bubble")
    Object.assign(bubble, {
        style: `
            --size: ${Math.random() * 4 + 2}rem;
            --left: ${Math.random() * 104 - 2}%;
            --time: ${Math.random() * 2 + 2}s;
            --delay: -${Math.random() * 2 + 2}s;
        `
    })
    bubbles.append(bubble)
}