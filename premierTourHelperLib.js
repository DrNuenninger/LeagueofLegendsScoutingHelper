function createTeamOpggUrl(summonerNames) {
    var opggUrl = "https://op.gg/de/lol/multisearch/euw?summoners=";
    summonerNames.forEach(summonerName => {
		encodedSummonerName = summonerName.replace("#", "%23")
        opggUrl = opggUrl + "%2C"+ encodedSummonerName;
    });

    return opggUrl;
}

function createPlayerOpggUrl(summonerName) {
    return "https://euw.op.gg/summoner/userName=" + summonerName;
}