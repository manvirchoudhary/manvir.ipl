const fs = require("fs");
const csv = require("csvtojson");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonPerYear = require("./ipl/matchesWonPerYear");
const extraRunsPerTeam = require("./ipl/extraRunsPerTeam");
const economyPerBowler = require("./ipl/economyPerBowler");
const mostRunsForYear = require("./ipl/mostRunsForYear");
const extraRunsFinal = require("./ipl/extraRunsFinal");
const port = process.env.PORT
const JSON_OUTPUT_FILE_PATH = "./public/data.json";


function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          const result = {};
          result.matchesPlayedPerYear = matchesPlayedPerYear(matches);
          result.matchesWonPerYear = matchesWonPerYear(matches);
          result.extraRunsPerTeam = extraRunsPerTeam(matches, deliveries);
          result.economyPerBowler = economyPerBowler(matches, deliveries);
          result.mostRunsForYear = mostRunsForYear(matches, deliveries);
          saveData(result);
          // let resultSaved = mostRunsForYear(matches,deliveries);
          // console.log(resultSaved)
          
        });

    });

}

function saveData(result) {
  const jsonData = result

  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}


main()

app.use(express.static('Public'))
app.use(bodyParser.json())
app.get('/extra-runs-final', (req, res) => {
  csv()
  .fromFile(MATCHES_FILE_PATH)
  .then(matches => {
    csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
        let year = req.query.year;
        let extra_run = extraRunsFinal(matches, deliveries, year);
        res.json({year, extra_run})
  
        // let resultSaved = mostRunsForYear(matches,deliveries);
        // console.log(resultSaved)
        
      });
  
  });
  
})

app.listen(port || 8080);
