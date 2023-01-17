import {LOCALSTORAGE_TOKEN_KEY} from '../utils/index';

const customFetch = async(url,{body,...customConfig}) => {

    const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

    const headers = {
        'content-type' : 'application/json',
        Accept: 'application/json'
    }

    if(token){
        headers.Authorization = `Bearer${token}`;
    }

    const config = {
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers
        },
 
        if(body){  //if body exists
            config.body = JSON.stringify(body); //object to string parsing , strings cant be written directly

        }
    }


    try{
        //making fetch request
        const response = await fetch(url,config);

        const data = await response.json();

        if(response.success){
            return {
                data : data.data,
                success: true
            };
        }
        throw new Error(data.message);

    }catch(error){
        console.log('error');
        return{
            message: error.message,
            success: false
        };
    }
};

const getPosts = (page,limit) =>{ //page for pge no req, limit to have limit result per page
    
};