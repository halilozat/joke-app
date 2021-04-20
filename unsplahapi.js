// random pictures api

class UnsplashApi{
    constructor(){
        this.baseURL = 'https://api.unsplash.com/';
        this.clientID = 'Client-ID DJZFf7TGZF1oowrU0B2zdGErRyCn2Vl5Dfv0GR5uyDo'
        this.axiosObject = axios.create({
            baseURL : this.baseURL,
            headers: {
                Authorization : this.clientID
            },
            params: {
                query : 'animal', //just animal photos
                count : 1
            }
        });
    }

    async getRandomPhoto(){
        try {
            const photoResponse = await this.axiosObject.get('/photos/random')
            console.log(photoResponse.data[0].urls.regular)
            return photoResponse.data[0].urls.regular;
        } catch (err) {
            console.log(err)
            
        }
    }
}