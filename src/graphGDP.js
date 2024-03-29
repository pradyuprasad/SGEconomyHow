import Chart from 'chart.js/auto'
const fs = require('fs');

GDPData = [
  {
    "date": "1975-03-31",
    "value": 7367.3
  },
  {
    "date": "1975-06-30",
    "value": 7564.2
  },
  {
    "date": "1975-09-30",
    "value": 7960.5
  },
  {
    "date": "1975-12-30",
    "value": 8134.6
  },
  {
    "date": "1976-03-31",
    "value": 7972
  },
  {
    "date": "1976-06-30",
    "value": 8124.5
  },
  {
    "date": "1976-09-30",
    "value": 8537
  },
  {
    "date": "1976-12-30",
    "value": 8700.6
  },
  {
    "date": "1977-03-31",
    "value": 8467.8
  },
  {
    "date": "1977-06-30",
    "value": 8739.3
  },
  {
    "date": "1977-09-30",
    "value": 9081.6
  },
  {
    "date": "1977-12-30",
    "value": 9329.6
  },
  {
    "date": "1978-03-31",
    "value": 8942.2
  },
  {
    "date": "1978-06-30",
    "value": 9280.1
  },
  {
    "date": "1978-09-30",
    "value": 9884.6
  },
  {
    "date": "1978-12-30",
    "value": 10281.5
  },
  {
    "date": "1979-03-31",
    "value": 9793.4
  },
  {
    "date": "1979-06-30",
    "value": 10274
  },
  {
    "date": "1979-09-30",
    "value": 10692
  },
  {
    "date": "1979-12-30",
    "value": 11296.8
  },
  {
    "date": "1980-03-31",
    "value": 10922.2
  },
  {
    "date": "1980-06-30",
    "value": 11334.3
  },
  {
    "date": "1980-09-30",
    "value": 11797.3
  },
  {
    "date": "1980-12-30",
    "value": 12255.7
  },
  {
    "date": "1981-03-31",
    "value": 12045.8
  },
  {
    "date": "1981-06-30",
    "value": 12633.1
  },
  {
    "date": "1981-09-30",
    "value": 13113.3
  },
  {
    "date": "1981-12-30",
    "value": 13526.1
  },
  {
    "date": "1982-03-31",
    "value": 13140.5
  },
  {
    "date": "1982-06-30",
    "value": 13563.7
  },
  {
    "date": "1982-09-30",
    "value": 13957.7
  },
  {
    "date": "1982-12-30",
    "value": 14301.1
  },
  {
    "date": "1983-03-31",
    "value": 14134.1
  },
  {
    "date": "1983-06-30",
    "value": 14649.2
  },
  {
    "date": "1983-09-30",
    "value": 15151.3
  },
  {
    "date": "1983-12-30",
    "value": 15730.2
  },
  {
    "date": "1984-03-31",
    "value": 15675.4
  },
  {
    "date": "1984-06-30",
    "value": 16084.5
  },
  {
    "date": "1984-09-30",
    "value": 16488.4
  },
  {
    "date": "1984-12-30",
    "value": 16662.4
  },
  {
    "date": "1985-03-31",
    "value": 16289.7
  },
  {
    "date": "1985-06-30",
    "value": 16074.7
  },
  {
    "date": "1985-09-30",
    "value": 16106.3
  },
  {
    "date": "1985-12-30",
    "value": 16035.8
  },
  {
    "date": "1986-03-31",
    "value": 15634
  },
  {
    "date": "1986-06-30",
    "value": 16087.5
  },
  {
    "date": "1986-09-30",
    "value": 16567.8
  },
  {
    "date": "1986-12-30",
    "value": 17083.4
  },
  {
    "date": "1987-03-31",
    "value": 16893.6
  },
  {
    "date": "1987-06-30",
    "value": 17723.4
  },
  {
    "date": "1987-09-30",
    "value": 18597.5
  },
  {
    "date": "1987-12-30",
    "value": 19217.1
  },
  {
    "date": "1988-03-31",
    "value": 18775.8
  },
  {
    "date": "1988-06-30",
    "value": 19850.3
  },
  {
    "date": "1988-09-30",
    "value": 20682.9
  },
  {
    "date": "1988-12-30",
    "value": 21281
  },
  {
    "date": "1989-03-31",
    "value": 20632.7
  },
  {
    "date": "1989-06-30",
    "value": 22117.2
  },
  {
    "date": "1989-09-30",
    "value": 22733.8
  },
  {
    "date": "1989-12-30",
    "value": 23293.3
  },
  {
    "date": "1990-03-31",
    "value": 23523.7
  },
  {
    "date": "1990-06-30",
    "value": 24053
  },
  {
    "date": "1990-09-30",
    "value": 24745.6
  },
  {
    "date": "1990-12-30",
    "value": 25173.4
  },
  {
    "date": "1991-03-31",
    "value": 25032.5
  },
  {
    "date": "1991-06-30",
    "value": 25624
  },
  {
    "date": "1991-09-30",
    "value": 26545.5
  },
  {
    "date": "1991-12-30",
    "value": 26814.6
  },
  {
    "date": "1992-03-31",
    "value": 26453.9
  },
  {
    "date": "1992-06-30",
    "value": 27004
  },
  {
    "date": "1992-09-30",
    "value": 28322.4
  },
  {
    "date": "1992-12-30",
    "value": 29142.8
  },
  {
    "date": "1993-03-31",
    "value": 28824.6
  },
  {
    "date": "1993-06-30",
    "value": 30333
  },
  {
    "date": "1993-09-30",
    "value": 31580.6
  },
  {
    "date": "1993-12-30",
    "value": 32896.3
  },
  {
    "date": "1994-03-31",
    "value": 32712.4
  },
  {
    "date": "1994-06-30",
    "value": 33467.3
  },
  {
    "date": "1994-09-30",
    "value": 35306.3
  },
  {
    "date": "1994-12-30",
    "value": 35866.6
  },
  {
    "date": "1995-03-31",
    "value": 34431.9
  },
  {
    "date": "1995-06-30",
    "value": 35948.6
  },
  {
    "date": "1995-09-30",
    "value": 38217.2
  },
  {
    "date": "1995-12-30",
    "value": 38610.5
  },
  {
    "date": "1996-03-31",
    "value": 38460.7
  },
  {
    "date": "1996-06-30",
    "value": 39047.4
  },
  {
    "date": "1996-09-30",
    "value": 39833.6
  },
  {
    "date": "1996-12-30",
    "value": 40865
  },
  {
    "date": "1997-03-31",
    "value": 40669
  },
  {
    "date": "1997-06-30",
    "value": 42743.9
  },
  {
    "date": "1997-09-30",
    "value": 44192.3
  },
  {
    "date": "1997-12-30",
    "value": 43758.3
  },
  {
    "date": "1998-03-31",
    "value": 41282
  },
  {
    "date": "1998-06-30",
    "value": 41711.4
  },
  {
    "date": "1998-09-30",
    "value": 41975.6
  },
  {
    "date": "1998-12-30",
    "value": 42639.9
  },
  {
    "date": "1999-03-31",
    "value": 42185
  },
  {
    "date": "1999-06-30",
    "value": 43975.5
  },
  {
    "date": "1999-09-30",
    "value": 45349.6
  },
  {
    "date": "1999-12-30",
    "value": 45683.3
  },
  {
    "date": "2000-03-31",
    "value": 45997.5
  },
  {
    "date": "2000-06-30",
    "value": 47584.6
  },
  {
    "date": "2000-09-30",
    "value": 49671.1
  },
  {
    "date": "2000-12-30",
    "value": 49955.5
  },
  {
    "date": "2001-03-31",
    "value": 48495.8
  },
  {
    "date": "2001-06-30",
    "value": 47825.5
  },
  {
    "date": "2001-09-30",
    "value": 47214
  },
  {
    "date": "2001-12-30",
    "value": 47604.4
  },
  {
    "date": "2002-03-31",
    "value": 47959.6
  },
  {
    "date": "2002-06-30",
    "value": 49845.5
  },
  {
    "date": "2002-09-30",
    "value": 50336.3
  },
  {
    "date": "2002-12-30",
    "value": 50497.4
  },
  {
    "date": "2003-03-31",
    "value": 49958.8
  },
  {
    "date": "2003-06-30",
    "value": 49717.3
  },
  {
    "date": "2003-09-30",
    "value": 53017.6
  },
  {
    "date": "2003-12-30",
    "value": 54979.7
  },
  {
    "date": "2004-03-31",
    "value": 55124
  },
  {
    "date": "2004-06-30",
    "value": 56432.5
  },
  {
    "date": "2004-09-30",
    "value": 57486.8
  },
  {
    "date": "2004-12-30",
    "value": 59272.8
  },
  {
    "date": "2005-03-31",
    "value": 58110.3
  },
  {
    "date": "2005-06-30",
    "value": 59959
  },
  {
    "date": "2005-09-30",
    "value": 62367.3
  },
  {
    "date": "2005-12-30",
    "value": 64698
  },
  {
    "date": "2006-03-31",
    "value": 64039.2
  },
  {
    "date": "2006-06-30",
    "value": 65220
  },
  {
    "date": "2006-09-30",
    "value": 67735.7
  },
  {
    "date": "2006-12-30",
    "value": 70218.4
  },
  {
    "date": "2007-03-31",
    "value": 69521.8
  },
  {
    "date": "2007-06-30",
    "value": 71768.4
  },
  {
    "date": "2007-09-30",
    "value": 75167.4
  },
  {
    "date": "2007-12-30",
    "value": 74862.4
  },
  {
    "date": "2008-03-31",
    "value": 75196.5
  },
  {
    "date": "2008-06-30",
    "value": 74147.7
  },
  {
    "date": "2008-09-30",
    "value": 75107.9
  },
  {
    "date": "2008-12-30",
    "value": 72296.6
  },
  {
    "date": "2009-03-31",
    "value": 69395.7
  },
  {
    "date": "2009-06-30",
    "value": 73277.9
  },
  {
    "date": "2009-09-30",
    "value": 77238.8
  },
  {
    "date": "2009-12-30",
    "value": 77216
  },
  {
    "date": "2010-03-31",
    "value": 80698.6
  },
  {
    "date": "2010-06-30",
    "value": 86924
  },
  {
    "date": "2010-09-30",
    "value": 85183.5
  },
  {
    "date": "2010-12-30",
    "value": 87464.6
  },
  {
    "date": "2011-03-31",
    "value": 88086
  },
  {
    "date": "2011-06-30",
    "value": 89460.8
  },
  {
    "date": "2011-09-30",
    "value": 91787.2
  },
  {
    "date": "2011-12-30",
    "value": 92084.3
  },
  {
    "date": "2012-03-31",
    "value": 92354.3
  },
  {
    "date": "2012-06-30",
    "value": 94982.9
  },
  {
    "date": "2012-09-30",
    "value": 93656.6
  },
  {
    "date": "2012-12-30",
    "value": 96455.2
  },
  {
    "date": "2013-03-31",
    "value": 95523
  },
  {
    "date": "2013-06-30",
    "value": 99358.7
  },
  {
    "date": "2013-09-30",
    "value": 99385.2
  },
  {
    "date": "2013-12-30",
    "value": 101366.2
  },
  {
    "date": "2014-03-31",
    "value": 99610.7
  },
  {
    "date": "2014-06-30",
    "value": 102643
  },
  {
    "date": "2014-09-30",
    "value": 103017.9
  },
  {
    "date": "2014-12-30",
    "value": 105931.8
  },
  {
    "date": "2015-03-31",
    "value": 102572.2
  },
  {
    "date": "2015-06-30",
    "value": 105849.7
  },
  {
    "date": "2015-09-30",
    "value": 106783.3
  },
  {
    "date": "2015-12-30",
    "value": 108238.9
  },
  {
    "date": "2016-03-31",
    "value": 105950.2
  },
  {
    "date": "2016-06-30",
    "value": 109035.6
  },
  {
    "date": "2016-09-30",
    "value": 110153.8
  },
  {
    "date": "2016-12-30",
    "value": 113500.4
  },
  {
    "date": "2017-03-31",
    "value": 110938.2
  },
  {
    "date": "2017-06-30",
    "value": 113024.8
  },
  {
    "date": "2017-09-30",
    "value": 115939.4
  },
  {
    "date": "2017-12-30",
    "value": 118533.1
  },
  {
    "date": "2018-03-31",
    "value": 116118.5
  },
  {
    "date": "2018-06-30",
    "value": 118400.8
  },
  {
    "date": "2018-09-30",
    "value": 119602.5
  },
  {
    "date": "2018-12-30",
    "value": 120437.4
  },
  {
    "date": "2019-03-31",
    "value": 118043.3
  },
  {
    "date": "2019-06-30",
    "value": 120112.2
  },
  {
    "date": "2019-09-30",
    "value": 120610
  },
  {
    "date": "2019-12-30",
    "value": 122176.8
  },
  {
    "date": "2020-03-31",
    "value": 119305.7
  },
  {
    "date": "2020-06-30",
    "value": 105881.7
  },
  {
    "date": "2020-09-30",
    "value": 115561.3
  },
  {
    "date": "2020-12-30",
    "value": 121582.1
  },
  {
    "date": "2021-03-31",
    "value": 124540.6
  },
  {
    "date": "2021-06-30",
    "value": 124886.9
  },
  {
    "date": "2021-09-30",
    "value": 126531.9
  },
  {
    "date": "2021-12-30",
    "value": 131174.8
  },
  {
    "date": "2022-03-31",
    "value": 129716.9
  },
  {
    "date": "2022-06-30",
    "value": 130686.6
  },
  {
    "date": "2022-09-30",
    "value": 131815
  },
  {
    "date": "2022-12-30",
    "value": 134379.9
  },
  {
    "date": "2023-03-31",
    "value": 130426.7
  },
  {
    "date": "2023-06-30",
    "value": 131392.3
  },
  {
    "date": "2023-09-30",
    "value": 133121.5
  },
  {
    "date": "2023-12-30",
    "value": 137319
  }
]

timeLabels = []
dataValues = []
  for (const k in GDPData) {
    timeLabels.push(GDPData[k].date)
    dataValues.push(GDPData[k].value)
  }



(async function () {
  data = GDPData

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'line',
      data: {
        labels: timeLabels,
        datasets: [
          {
            label: 'GDP per quarter in 2015 Singapore Dollars',
            data: dataValues
          }
        ]
      }
    }
  );
})();
