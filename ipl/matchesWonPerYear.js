// function matchesWonPerYear(matches){
//     const wins = {};
//     for(let match of matches){
//         const season= match.season
//         const winner = match.winner 
        
//         if(wins[season]){            
//             if(wins [season] [winner]){
//                 wins[season] [winner] += 1
//             } else {
//                 wins[season][winner] = 1
//             }
//         } 
//         else {
//              wins[season] = {}
//              wins[season][winner] = 1
//         }
//         }
        
//     return wins

// }

// module.exports = matchesWonPerYear;


function matchesWonPerYear(matches){
    const result = {};
    for(let match of matches){
        const winner = match.winner
        if(result[winner]){
            result[winner] += 1 
        } else {
            result[winner] = 1
        }
    }
    return result
}


module.exports = matchesWonPerYear;
