export function saveStorageJWT(jwt) {
    if(jwt){
        localStorage.setItem('jwt', jwt);
        return true;
    }
    else{
        return false;
    }
}

export function clearStorageJWT() {
    if(localStorage.getItem('jwt')){
        localStorage.removeItem('jwt');
        return true;
    }
    else{
        return false;
    }
}

export function getStorageJWT() {
    if(localStorage.getItem('jwt')){
        const jwt = localStorage.jwt;
        return { jwt };
    }
    else{
        return undefined;
    }
}