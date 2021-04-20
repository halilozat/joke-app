//random joke api

class JokeApi{
    constructor(){
        this.baseURL = 'https://api.chucknorris.io';
        this.axiosObject = axios.create({
            baseURL : this.baseURL,

        });
    }

    async getRandomJoke(){
        try {
            const jokeResponse = await this.axiosObject.get('/jokes/random')
            console.log(jokeResponse.data.value)
            return jokeResponse.data.value;
        } catch (err) {
            console.log(err)
        }
    }
}