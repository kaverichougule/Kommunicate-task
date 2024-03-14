let url="https://www.kommunicate.io/poweredby?&utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

function getUrlParameterValue(url, parameter) {
    let params=new URLSearchParams(url);
    return params.get(parameter)
    
}
console.log(getUrlParameterValue(url,'utm_source'));