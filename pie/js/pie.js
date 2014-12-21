new Highcharts.Chart({
    exporting:{
        enabled:false
    }, legend:{
        borderWidth:1,
        backgroundColor:'#EEE',
        itemMarginTop:5,
        itemMarginBottom:5,
        verticalAlign:'middle',
        align:'right',
        layout:'vertical',
        symbolPadding: 5
    },chart:{
        renderTo:'container'
    },plotOptions:{
        pie:{
            cursor:'pointer',
            showInLegend: true,
            dataLabels: {
                format:'<b>{point.name}</b>:{point.percentage:.1f}%'
            },tooltip:{
                pointFormat:'<span style="color:{series.color}">{series.name}</span>:{point.y}个'
            }
        }
    }, series: [{
        type:'pie',
        name: '产品比例',
        data:[['优秀',30], ['不合格',40], {name: '合格', y: 50}]
//        data:[]
    }],lang: {
        noData: "Nichts zu anzeigen"
    },
    noData: {
        style: {
            fontWeight: 'bold',
            fontSize: '15px',
            color: '#303030'
        }
    }
});