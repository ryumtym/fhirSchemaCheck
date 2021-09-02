const axios = require('axios'); 
const https = require('https'); 

class AxiosCall{
    /**
     * @constructor axiosでapiを叩く
     * @param {string} method [第1引数]...apiを叩く際のGET,POST等を入力
     * @param {string} url [第2引数]...apiを叩く際に使用するurlを入力
     */
    constructor(method,url){
        this.method  = method;
        this.url = url;
    }
    /**
     * axiosでapiを叩く
     */
    async req() {
        try { 
            const response = await axios({
                method     : this.method,
                url        : this.url,
                // httpsAgent : new https.Agent({rejectUnauthorized: false})//https://github.com/axios/axios/issues/535#issuecomment-607439471
            })
            return(response.data);
        } catch (error) { 
            console.log(error); 
        } 
    }
}

module.exports = AxiosCall