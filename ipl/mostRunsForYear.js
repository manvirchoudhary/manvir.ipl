function mostRunsForYear(matches, deliveries) {
    let idSeason = [];
    let totalRuns = {}
    for (let match of matches) {
        const id = match.id;
        const season = match.season;
        if (season == '2012') {
            idSeason.push(id);

        }
    }

    // Adding  batsmen runs for 2012 
    for (let id of idSeason) {
        for (let delivery of deliveries) {
            const match_id = delivery.match_id;
            const batsman = delivery.batsman;
            const batsman_runs = parseInt(delivery.batsman_runs);

            if (id == match_id) {
                if (totalRuns[batsman]) {
                    totalRuns[batsman] += batsman_runs
                } else {
                    totalRuns[batsman] = batsman_runs
                }
            }

        }
    }
    //Converting obj in array for sorting
    let entries = Object.entries(totalRuns);
    let sorted = entries.sort((a, b) => a[1] - b[1]);
    let finalSorted = sorted.reverse();

    let finalSlice = finalSorted.slice(0, 5);

    // Convert sorted and sliced array in object
    let finalObj = {}
    finalSlice.forEach(function (item) {
        finalObj[item[0]] = Number(item[1])
    })

    return finalObj;
}





module.exports = mostRunsForYear;