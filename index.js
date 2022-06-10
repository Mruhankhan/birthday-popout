
setInterval(timeing, 1000)

function timeing(){
const arrayForEmoji = ['&#128514', "&#128518", "&#128540", "&#128558", '&#128561', "&#129297",  "&#129315",  "&#129321"]
   let spam=  document.getElementById('span') 
    spam.innerHTML = arrayForEmoji[Math.floor(Math.random() * arrayForEmoji.length)]
}
