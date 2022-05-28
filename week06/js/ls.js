function readFromLS(key) { 
    let returned_item = localStorage.getItem(key);
    return JSON.parse(returned_item);
}

function writeToLS(key, data) { 
    localStorage.setItem(key, data);
}

export default{
    writeToLS,
    readFromLS
}