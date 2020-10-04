function economyPerBowler(matches, deliveries) {
    let result = []
    let bowlerRecord = {}
    let final_result = {}
    let sortable = []
    for (let match of matches) {
        const season = match.season;
        const id = match.id;
        if (season == '2015') {
            result.push(id)
        }
    }
    // Finding total ball by bowlers for 2015    
    for (let id of result) {
        for (let delivery of deliveries) {

            const bowl = delivery.bowler;
            const ball = parseInt(delivery.ball);
            const wide = parseInt(delivery.wide_runs)
            const noball = parseInt(delivery.noball_runs)
            const matchId = delivery.match_id
            if (id == matchId) {
                if (bowlerRecord[bowl]) {
                    if (wide > 0 || noball > 0) {
                        bowlerRecord[bowl] += 1 - 1
                    } else {
                        bowlerRecord[bowl] += 1
                    }

                } else {
                    bowlerRecord[bowl] = ball - wide - noball
                }
            }
        }
    }
    //Converting ball into overs
    for (let balls in bowlerRecord) {
        if (bowlerRecord[balls]) {
            bowlerRecord[balls] = bowlerRecord[balls] / 6;
        }
    }

    // finding total runs given  by bowler in 2015
    for (let new_id of result) {
        for (let del of deliveries) {
            const bowler = del.bowler
            const match_id = del.match_id
            const total_runs = parseInt(del.total_runs)
            if (new_id == match_id) {
                if (final_result[bowler]) {
                    final_result[bowler] += total_runs
                } else {
                    final_result[bowler] = total_runs
                }
            }


        }
    }
    // Finding economy of a bowler
    for (let over in bowlerRecord) {

        for (let runs in final_result) {
            if (over == runs) {
                final_result[runs] /= bowlerRecord[over]

            }
        }
    }
    // Finding 10 least economy bowlers
    for (let eco in final_result) {
        sortable.push([eco, final_result[eco].toFixed(2)])
    }
    sortable.sort(function (a, b) {
        return a[1] - b[1];
    });

    let finalSorted = sortable.slice(0, 9);
    finalSorted[9] = sortable[11]
    //Converting sorted in object
    const objSorted = {}
    finalSorted.forEach(function (item) {
        objSorted[item[0]] = Number(item[1])
    })

    return objSorted

}
module.exports = economyPerBowler