function createTeamOpggUrl(summonerNames) {
    var opggUrl = "https://euw.op.gg/multi/query=";
    summonerNames.forEach(summonerName => {
        opggUrl = opggUrl + "%2C"+ summonerName;
    });

    return opggUrl;
}

function createPlayerOpggUrl(summonerName) {
    return "https://euw.op.gg/summoner/userName=" + summonerName;
}