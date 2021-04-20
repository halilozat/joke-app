class Screen{
    constructor(){
        this.getJokeButton = document.querySelector('.get-joke-button');
        this.getJokeButton.addEventListener('click', () => this.getJoke());
    }
    async getJoke(){
        const randomPhoto = await new UnsplashApi().getRandomPhoto();
        const randomJoke = await new JokeApi().getRandomJoke();
        const translate = await new TranslateApi(randomJoke).translate();

        const allResults = {
            randomPhoto,
            randomJoke,
            translate
        }
        this.showResult(allResults);
    }
    
    showResult(results){
        document.querySelector('.result').innerHTML = ` 
      <div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="${results.randomPhoto}" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-danger pb-4 has-text-centered">${results.randomJoke}</p>
            </div>
          </div>
        </div>

        <div class="block"></div>
        <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4 has-text-primary pb-4 has-text-centered">${results.translate}</p>
              </div>
            </div>
          </div>


      </div>`;
    }

}