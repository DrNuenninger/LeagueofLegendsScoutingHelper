function createTeamOpggUrl(summonerNames) {
    var opggUrl = "https://euw.op.gg/multi/query=";
    summonerNames.forEach(summonerName => {
		encodedSummonerName = summonerName.replace("#", "%23")
        opggUrl = opggUrl + "%2C"+ encodedSummonerName;
    });

    return opggUrl;
}

function createPlayerOpggUrl(summonerName) {
    return "https://euw.op.gg/summoner/userName=" + summonerName;
}