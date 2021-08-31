function guessCity(capital, coastal, famous, ancient) {
    for(let key in cities){
        if(cities[key]["capital"] === capital && cities[key]["coastal"] === coastal && cities[key]["famous"] === famous && cities[key]["ancient"] === ancient){
            return key;
        }
    }
    return;
}

let cities = {
    "Jerusalem":{
        "capital": true,
        "coastal": false,
        "famous": true,
        "ancient":true
    },
    "Tel Aviv":{
        "capital": false,
        "coastal": true,
        "famous": true,
        "ancient":false
    },
    "Acre":{
        "capital": false,
        "coastal": true,
        "famous": false,
        "ancient":true
    },
    "Katzrin":{
        "capital": false,
        "coastal": false,
        "famous": false,
        "ancient":true
    },
    "Zikim":{
        "capital": false,
        "coastal": true,
        "famous": false,
        "ancient":false
    },
    "Musmus":{
        "capital": false,
        "coastal": false,
        "famous": false,
        "ancient":false
    }
}

console.log(guessCity(false, false, false, false));
