function extraRunsPerTeam(matches, deliveries) {
    let result = [];
    let final_result = {}
    for (let match of matches) {
        const season = match.season
        const new_id = match.id;
        if (season == '2016') {
            result.push(new_id);
        }
    }
    for (let id of result) {
        for (let delivery of deliveries) {
            const match_id = delivery.match_id
            const team = delivery.bowling_team
            const extra = parseInt(delivery.extra_runs)

            if (id == match_id) {
                if (final_result[team]) {
                    final_result[team] += extra
                } else {
                    final_result[team] = extra
                }
            }

        }

    }
    return final_result
}


module.exports = extraRunsPerTeam;