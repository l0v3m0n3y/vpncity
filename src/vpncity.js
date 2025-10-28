class vpncity{
    constructor(){
        this.api = "https://www.vpncity.com/api"
        this.code=null
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/x-www-form-urlencoded; charset=UTF-8"}
    }
    async register(email,password){
        let req=await fetch(`${this.api}/account/register`,{method:"POST",body:JSON.stringify({"email":email,"token":password,"token2":password,"funnel":"browserextension-ch","language":"en"}),headers: this.headers});
        let json=await req.json()
        return json;
    }
     async login(email,password){
        let req=await fetch(`${this.api}/account/login`,{method:"POST",body:JSON.stringify({"username":email,"token":password,"language":"en","proxy":1}),headers: this.headers});
        let json=await req.json()
        this.headers["Authorization"]=`token ${json["data"]["token"]}`
        return json;
    }
    async my_ip(){
        let req=await fetch(`${this.api}/session/ipcheck`,{method:"GET",headers: this.headers});
        return await req.json()
    }
     async locations_list(){
        let req=await fetch(`${this.api}/locations`,{method:"GET",headers: this.headers});
        return await req.json()
        }
}
module.exports = {vpncity};