function setUrl(path){
    window.location.hash = path
}
function readUrl(){
    return window.location.hash.slice(1)
}
function transformToUrl(path){
    return path.toLowerCase().replaceAll(" ", "_")
}

export {setUrl, readUrl, transformToUrl}