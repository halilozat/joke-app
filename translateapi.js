class TranslateApi{
    constructor(englishJoke){
        this.baseURL = 'https://translation.googleapis.com/'

        this.searhSentence = englishJoke;

        this.axiosObject = axios.create({
            baseURL: this.baseURL,
            params: {
                target: 'tr',
                key: 'AIzaSyCBArr1va7Taz3OFamklK4uRhJ7-o0uEOg',
                q:this.searhSentence
            }
        })
    }

    async translate(){
        const _translate = await this.axiosObject.get('language/translate/v2');
        return _translate.data.data.translations[0].translatedText;
    }
}