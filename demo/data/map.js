let data = [
  {name: 'Hangzhou', value: 10},
  {name: 'Seattle', value: 20}
]
const geoCoordMap = {
  'Hangzhou': [120.19, 30.26],
  'Seattle': [47.36, 122.20]

}

function convertData (data) {
  let res = []
  for (let i = 0; i < data.length; i++) {
    let geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}

export default {
  backgroundColor: '#404a59',
  title: {
    text: 'BYTOM',
    subtext: 'Bytom will pass the LN torch',
    sublink: '/',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      return params.name + ' : ' + params.value[2]
    }
  },
  legend: {
    orient: 'vertical',
    y: 'bottom',
    x: 'right',
    data: ['BYTOM'],
    textStyle: {
      color: '#fff'
    }
  },
  geo: {
    map: 'world',
    label: {
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        areaColor: '#323c48',
        borderColor: '#111'
      },
      emphasis: {
        areaColor: '#2a333d'
      }
    }
  },
  series: [
    {
      name: 'BYTOM',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(data),
      symbolSize: val => val[2] / 10,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#ddb926'
        }
      }
    },
    {
      name: 'BYTOM',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: convertData(data.sort((a, b) => b.value - a.value).slice(0, 6)),
      // data: convertData(data),
      symbolSize: val => val[2] / 10,
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#f4e925',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      zlevel: 1
    }
  ]
}
