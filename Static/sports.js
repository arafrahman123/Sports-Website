window.addEventListener('load', () => {
var election = new Datamap({
  scope: 'usa',
  element: document.getElementById('election'),
  responsive: true ,
  geographyConfig: {
  highlightBorderColor: '#bada55',
  popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + geography.properties.name  + " Professional Sport Teams : " + data.SportTeam;
    },
    highlightBorderWidth: 3
  },

  fills: {
  'A': 'Red',
  'B': '#306596',
  'C': '#667FAF',
  'D': '#A9C0DE',
  'E': '#CA5E5B',
  'F': '#EAA9A8',
  defaultFill: '#EDDC4E'
},
data: {
  "AZ": {
      "fillKey": "A",
      "SportTeam":  4
  },
  "CO": {
      "fillKey": "B",
      "SportTeam": 4
  },
  "DE": {
      "fillKey": "C",
      "SportTeam": 0
  },
  "FL": {
      "fillKey": "D",
      "SportTeam": 9
  },
  "GA": {
      "fillKey": "E",
      "SportTeam": 3
  },
  "HI": {
      "fillKey": "F",
      "SportTeam": 0
  },
  "ID": {
      "fillKey": "A",
      "SportTeam": 0
  },
  "IL": {
      "fillKey": "B",
      "SportTeam": 5
  },
  "IN": {
      "fillKey": "A",
      "SportTeam": 2
  },
  "IA": {
      "fillKey": "B",
      "SportTeam": 0
  },
  "KS": {
      "fillKey": "A",
      "SportTeam": 0
  },
  "KY": {
      "fillKey": "A",
      "SportTeam": 0
  },
  "LA": {
      "fillKey": "A",
      "SportTeam": 2
  },
  "MD": {
      "fillKey": "B",
      "SportTeam": 2
  },
  "ME": {
      "fillKey": "B",
      "SportTeam": 0
  },
  "MA": {
      "fillKey": "B",
      "SportTeam": 4
  },
  "MN": {
      "fillKey": "B",
      "SportTeam": 3
  },
  "MI": {
      "fillKey": "B",
      "SportTeam": 4
  },
  "MS": {
      "fillKey": "A",
      "SportTeam": 0
  },
  "MO": {
      "fillKey": "A",
      "SportTeam": 4
  },
  "MT": {
      "fillKey": "A",
      "SportTeam": 0
  },
  "NC": {
      "fillKey": "A",
      "SportTeam": 3
  },
  "NE": {
      "fillKey": "A",
      "SportTeam": 0
  },
  "NV": {
      "fillKey": "B",
      "SportTeam": 0
  },
  "NH": {
      "fillKey": "B",
      "SportTeam": 0
  },
  "NJ": {
      "fillKey": "B",
      "SportTeam": 1
  },
  "NY": {
      "fillKey": "B",
      "SportTeam": 8
  },
  "ND": {
      "fillKey": "A",
      "SportTeam": 0
  },
  "NM": {
      "fillKey": "B",
      "SportTeam": 0
  },
  "OH": {
      "fillKey": "C",
      "SportTeam": 6
  },
  "OK": {
      "fillKey": "A",
      "SportTeam": 1
  },
  "OR": {
      "fillKey": "B",
      "SportTeam": 1
  },
  "PA": {
      "fillKey": "B",
      "SportTeam": 7
  },
  "RI": {
      "fillKey": "B",
      "SportTeam": 0
  },
  "SC": {
      "fillKey": "A",
      "SportTeam": 0
  },
  "SD": {
      "fillKey": "A",
      "SportTeam": 0
  },
  "TN": {
      "fillKey": "A",
      "SportTeam": 3
  },
  "TX": {
      "fillKey": "A",
      "SportTeam": 7
  },
  "UT": {
      "fillKey": "A",
      "SportTeam": 1
  },
  "WI": {
      "fillKey": "C",
      "SportTeam": 3
  },
  "VA": {
      "fillKey": "B",
      "SportTeam": 0
  },
  "VT": {
      "fillKey": "A",
      "SportTeam": 0
  },
  "WA": {
      "fillKey": "B",
      "SportTeam": 2
  },
  "WV": {
      "fillKey": "A",
      "SportTeam": 0
  },
  "WY": {
      "fillKey": "B",
      "SportTeam": 0
  },
  "CA": {
      "fillKey": "D",
      "SportTeam": 16
  },
  "CT": {
      "fillKey": "D",
      "SportTeam": 0
  },
  "AK": {
      "fillKey": "C",
      "SportTeam": 0
  },
  "AR": {
      "fillKey": "A",
      "SportTeam": 0
  },
  "AL": {
      "fillKey": "E",
      "SportTeam": 0
  }
}
});
election.labels();


window.addEventListener('resize', function() {
        election.resize();
    });
});
