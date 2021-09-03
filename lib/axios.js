const axios = require('axios'); 
const https = require('https'); 

class AxiosCall{
    /**
     * @constructor axiosでapiを叩く
     * @param {string} url [第1引数]...apiを叩く際に使用するurlを入力
     */
    constructor(url){
        this.url = url;
    }

    async get(url) {
        try { 
            const response = await axios({
                method     : "GET",
                url        : url,
                // httpsAgent : new https.Agent({rejectUnauthorized: false})//https://github.com/axios/axios/issues/535#issuecomment-607439471
            })
            return(response.data);
        } catch (error) { 
            console.log(error); 
        } 
    }
    async post(){

    }
    async delete(){

    }
}

module.exports = AxiosCall