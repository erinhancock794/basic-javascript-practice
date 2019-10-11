import { films } from '/assets/films.js';
import { people } from '/assets/people.js';
import { species } from '/assets/species.js';


let mainArea = document.querySelector('main')

species.forEach((alien) => {
let alienDiv = document.createElement ('div')
let alienName = document.createElement('h1')
let alienPeople = document.createElement ('img')

let alienLang = document.createElement ('h2')

let charNum = getCharNumber(alien.url)

alienName.textContent = alien.name
alienLang.textContent = ('Language: ' + alien.language)
alienPeople.src = `https://starwars-visualguide.com/assets/img/species/${charNum}.jpg`

alienDiv.appendChild(alienName)
alienDiv.appendChild(alienPeople)
alienDiv.appendChild(alienLang)
mainArea.appendChild(alienDiv)

});



films.forEach(function(film) {
    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmCrawl = document.createElement('p')

    
    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)
    mainArea.appendChild(filmDiv)
  });

  people.forEach((person)=> {
      let personDiv = document.createElement ('div')
      let name = document.createElement ('h1')
      let gender = document.createElement('p')
      let pic = document.createElement('img')
    
    let charNum = getCharNumber(person.url)

      name.textContent = person.name
      gender.textContent = person.gender
      pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`


      personDiv.appendChild(name)
      personDiv.appendChild(gender)
      personDiv.appendChild(pic)

      mainArea.appendChild(personDiv)
  })
function getCharNumber(charURL){
    let end = charURL.lastIndexOf('/')
    let charID = (charURL.substring(end -2, end))
    if(charID.indexOf('/') !== -1) {
        return (charID.slice(1,2))
    } else {
        return charID
    }
}
