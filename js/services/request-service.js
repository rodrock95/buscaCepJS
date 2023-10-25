import RequestException from "./exceptions/request-exception.js";

export async function getJson(url){
    try{
        const response = await fetch(url);
        const JsonBody = await response.json();
        return JsonBody;
    }
    catch(e){
        throw new RequestException("Erro ao realizar requisição");
    }
}