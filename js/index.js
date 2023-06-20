document.addEventListener("mousemove",e =>{
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.clientX - window.innerWidth/2) * 0.005}deg;
            --move-y: ${(e.clientY - window.innerHeight/2) * -0.01}deg;
        `
    })
})

let gallery_button_right = document.getElementsByClassName("gallery_button_right")[0]
let gallery_button_left = document.getElementsByClassName("gallery_button_left")[0]
let gallery_cards = document.getElementsByClassName("gallery_cards")[0]
let card_index = 0
let cards = []

let cards_images = [
    "images\\png\\2435495-middle.png",
    "images\\png\\png-transparent-minecraft-story-mode-season-two-xbox-360-villagers-angle-furniture-video-game.png",
    "images\\png\\png-transparent-minecraft-mob-video-game-boss-salmon-salmon-angle-super-mario-bros-boss.png",
    "images\\png\\png-clipart-minecraft-story-mode-youtube-bill-cipher-undertale-mine-craft-bill-cipher-fictional-character.png",
    "images\\png\\1645963621_15-kartinkin-net-p-kartinki-zombi-iz-mainkrafta-15.png",
    "images\\png\\2435495-middle.png",
    "images\\png\\99-990990_tropical-fish-minecraft-png-png-download-puffer-fish.png"
]
for (let i=0; i<3; i++){
    add_card(cards_images[i], "right")
} 


function add_card(image, side){
    let new_card = document.createElement("img")
    new_card.scr=image
    new_card.classList.add("gallery_card_pic")
    
    if (side == "left") {
        cards.unshift(new_card)
        gallery_cards.prepend(new_card)
    }
    else {
        cards.push(new_card)
        gallery_cards.append(new_card)

    }
    gallery_cards.append(new_card)
}

gallery_button_right.addEventListener("click", event => {
    gallery_cards.removeChild(cards[0])
    cards.shift()
    card_index++
    if (card_index > cards_images.length - 1) {
        card_index = 0
    }
    add_card(cards_images[(card_index + 2) % cards_images.length], 'left')
})

gallery_button_left.addEventListener("click", event => {
    gallery_cards.removeChild(cards[2])
    cards.pop()
    card_index--
    if (card_index < 0) {
        card_index = cards_images.length - 1
    }
    add_card(cards_images[card_index], 'left')
}) 
