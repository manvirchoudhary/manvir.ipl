function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json()) // Converting json file in object format
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonPerYear(data.matchesWonPerYear);
  visualizeExtraRunsPerTeam(data.extraRunsPerTeam);
  visualizeEconomyPerBowler(data.economyPerBowler);
  visualizeMostRunsForYear(data.mostRunsForYear);
  return;
}


function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  var seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }


  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "1. Matches Played Per Year"
    },
    subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [{
      name: "Years",
      data: seriesData
    }]
  });

}

function visualizeMatchesWonPerYear(matchesWonPerYear) {
  const seriesData = [];
  for (let year in matchesWonPerYear) {
    seriesData.push([year, matchesWonPerYear[year]]);
  }





  Highcharts.chart("matches-won-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "2. Matches Won Per Year"
    },
    subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Wins"
      }
    },
    series: [{
      name: "Teams",
      data: seriesData
    }]
  });

}

function visualizeExtraRunsPerTeam(extraRunsPerTeam) {
  const seriesData = [];
  for (let team in extraRunsPerTeam) {
    seriesData.push([team, extraRunsPerTeam[team]]);
  }

  Highcharts.chart("extra-runs-per-team", {
    chart: {
      type: "column"
    },
    title: {
      text: "3. Extra Runs Conceded By Each Team in 2016"
    },
    subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Runs"
      }
    },
    series: [{
      name: "Teams",
      data: seriesData
    }]
  });

}


function visualizeEconomyPerBowler(economyPerBowler) {
  const seriesData = [];
  for (let team in economyPerBowler) {
    seriesData.push([team, economyPerBowler[team]]);
  }


  Highcharts.chart("economy-per-bowler", {
    chart: {
      type: "column"
    },
    title: {
      text: "4. Top Economical Bowlers in 2015 season"
    },
    subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    },
    series: [{
      name: "Players",
      data: seriesData
    }]
  });

}

function visualizeMostRunsForYear(mostRunsForYear) {
  const seriesData = [];
  for (let player in mostRunsForYear) {
    seriesData.push([player, mostRunsForYear[player]]);
  }

  Highcharts.chart("most-runs-for-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "5. Top Five Most Runs Scored For 2012"
    },
    subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "runs"
      }
    },
    series: [{
      name: "Players",
      data: seriesData
    }]
  });

}

function visualizeExtraRunsFinal(){
     var year = document.getElementById('year').value
     console.log(year)
     let url = "/extra-runs-final?year=" + year
     fetch(url)
        .then(r=>r.json())
        .then(find)
}

function find(data) {
  const seriesData = [];
  for (let team in data['extra_run']) {
    seriesData.push([team, data['extra_run'][team]]);
  }

  Highcharts.chart("container-2", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra runs by teams in " + data['year'] 
    },
    subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "runs"
      }
    },
    series: [{
      name: "teams",
      data: seriesData
    }]
  });

}
