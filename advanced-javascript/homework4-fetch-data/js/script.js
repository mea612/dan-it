getAndRenderFilm();

function getAndRenderFilm() {
    return fetch('https://swapi.dev/api/films/')
      .then(d => d.json())
      .then(data => data.results.sort((a, b) => b.episode_id - a.episode_id))
      .then(items => renderFilms(items))
}

function renderFilms(films) {

    films.forEach(film => {

        const filmElement = document.createElement('div');
        filmElement.insertAdjacentHTML('afterbegin', `
            <h3>Title: ${film.title}</h3>
            <p><strong>Episode:</strong> ${film.episode_id}</p>
            <p><strong>Description:</strong> ${film.opening_crawl}</p>
        `);
        
        const charactersList = document.createElement('ol');

        const preloader = document.createElement('div');
        preloader.className ='lds-dual-ring';

        Promise.all(film.characters.map(char => fetch(char)))
          .then(resps => Promise.all(resps.map(resp => resp.json())))
          .then(chars =>  chars.forEach(char => renderCharacters(char, charactersList, preloader)))
          
        // SIMPLE SOLUTION
        // film.characters.forEach(character => fetch(character)
        //     .then(response => response.json())
        //     .then(char => {
                   
        //         renderCharacters(char, charactersList)
        //     })
        // )
      
        charactersList.textContent = 'Characters: ';
        charactersList.style.fontWeight = 'bold';
        document.body.prepend(filmElement);
        filmElement.append(charactersList);
        filmElement.append(preloader);

      
    });
}

function renderCharacters(char, charactersList, preloader) {

    const charName = document.createElement('li');
    charName.textContent = char.name;
    charName.style.fontWeight = 'normal';
    charactersList.append(charName);
    preloader.remove();
};
