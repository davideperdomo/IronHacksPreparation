const DATASET_QUERY_FORMAT = "http://api.eia.gov/series/?api_key=707c8ecbdbd34cbb75272c7a4256ca6b&series_id=";

var DATASETS_API_SERIES_ID = {
	"EMISS.CO2-TOTV-TT-TO-MD.A" : ["Maryland", {lat: 39.063946, lng: -76.802101}],
	"EMISS.CO2-TOTV-TT-TO-AL.A" : ["Alabama", {lat: 32.806671, lng: -86.791130}],
	"EMISS.CO2-TOTV-TT-TO-AK.A" : ["Alaska", {lat: 61.370716, lng: -152.404419}],
	"EMISS.CO2-TOTV-TT-TO-AZ.A" : ["Arizona", {lat: 33.729759, lng: -111.431221}],
	"EMISS.CO2-TOTV-TT-TO-AR.A" : ["Arkansas", {lat: 34.969704, lng: 92.373123}],
	"EMISS.CO2-TOTV-TT-TO-CA.A" : ["California", {lat: 36.116203, lng: -119.681564}],
	"EMISS.CO2-TOTV-TT-TO-CO.A" : ["Colorado", {lat: 39.059811, lng: -105.311104}],
	"EMISS.CO2-TOTV-TT-TO-CT.A" : ["Connecticut",{lat: 41.597782, lng: -72.755371} ],
	"EMISS.CO2-TOTV-TT-TO-DE.A" : ["Delaware", {lat: 39.318523, lng: -75.507141}] ,
	"EMISS.CO2-TOTV-TT-TO-DC.A" : ["District of Columbia", {lat: 38.897438, lng: -77.026817}],
	"EMISS.CO2-TOTV-TT-TO-FL.A" : ["Florida", {lat: 27.766279, lng: -81.686783}],
	"EMISS.CO2-TOTV-TT-TO-GA.A" : ["Georgia", {lat: 33.040619, lng: -83.643074}],
	"EMISS.CO2-TOTV-TT-TO-HI.A" : ["Hawaii", {lat: 21.094318, lng: -157.498337}],
	"EMISS.CO2-TOTV-TT-TO-ID.A" : ["Idaho", {lat: 44.240459, lng: -114.478828}],
	"EMISS.CO2-TOTV-TT-TO-IL.A" : ["Illinois", {lat: 40.349457, lng: -88.986137}],
	"EMISS.CO2-TOTV-TT-TO-IN.A" : ["Indiana", {lat: 39.849426, lng: -86.258278}],
	"EMISS.CO2-TOTV-TT-TO-IA.A" : ["Iowa", {lat: 42.011539, lng: -93.210526}],
	"EMISS.CO2-TOTV-TT-TO-KS.A" : ["Kansas", {lat: 38.526600, lng: -96.726486}],
	"EMISS.CO2-TOTV-TT-TO-KY.A" : ["Kentucky", {lat: 37.668140, lng: -84.670067}],
	"EMISS.CO2-TOTV-TT-TO-LA.A" : ["Louisiana", {lat: 31.169546, lng: -91.867805}],
	"EMISS.CO2-TOTV-TT-TO-ME.A" : ["Maine", {lat: 44.693947, lng: -69.381927}],
	"EMISS.CO2-TOTV-TT-TO-MA.A" : ["Massachusetts", {lat: 42.230171, lng: -71.530106}],
	"EMISS.CO2-TOTV-TT-TO-MI.A" : ["Michigan", {lat: 43.326618, lng: -84.536095}],
	"EMISS.CO2-TOTV-TT-TO-MN.A" : ["Minnesota", {lat: 45.694454, lng: -93.900192}],
	"EMISS.CO2-TOTV-TT-TO-MS.A" : ["Mississippi", {lat: 32.741646, lng: -89.678696}],
	"EMISS.CO2-TOTV-TT-TO-MO.A" : ["Missouri", {lat: 38.456085, lng: -92.288368}],
	"EMISS.CO2-TOTV-TT-TO-MT.A" : ["Montana", {lat: 46.921925, lng: -110.454353}],
	"EMISS.CO2-TOTV-TT-TO-NE.A" : ["Nebraska", {lat: 41.125370, lng: -98.268082}],
	"EMISS.CO2-TOTV-TT-TO-NV.A" : ["Nevada", {lat: 38.313515, lng: -117.055374}],
	"EMISS.CO2-TOTV-TT-TO-NH.A" : ["New Hampshire", {lat: 43.452492, lng: -71.563896}],
	"EMISS.CO2-TOTV-TT-TO-NJ.A" : ["New Jersey", {lat: 40.298904, lng: -74.521011}],
	"EMISS.CO2-TOTV-TT-TO-NM.A" : ["New Mexico", {lat: 34.840515, lng: -106.248482}],
	"EMISS.CO2-TOTV-TT-TO-NY.A" : ["New York", {lat: 42.165726, lng: -74.948051}],
	"EMISS.CO2-TOTV-TT-TO-NC.A" : ["North Carolina", {lat: 35.630066, lng: -79.806419}],
	"EMISS.CO2-TOTV-TT-TO-ND.A" : ["North Dakota", {lat: 47.528912, lng: -99.784012}],
	"EMISS.CO2-TOTV-TT-TO-OH.A" : ["Ohio", {lat: 40.388783, lng: -82.764915}],
	"EMISS.CO2-TOTV-TT-TO-OK.A" : ["Oklahoma", {lat: 35.565342, lng: -96.928917}],
	"EMISS.CO2-TOTV-TT-TO-OR.A" : ["Oregon", {lat: 44.572021, lng: -122.070938}],
	"EMISS.CO2-TOTV-TT-TO-PA.A" : ["Pennsylvania", {lat: 40.590752, lng: -77.209755}],
	"EMISS.CO2-TOTV-TT-TO-RI.A" : ["Rhode Island", {lat: 41.680893, lng: -71.511780}],
	"EMISS.CO2-TOTV-TT-TO-SC.A" : ["South Carolina", {lat: 33.856892, lng: -80.945007}],
	"EMISS.CO2-TOTV-TT-TO-SD.A" : ["South Dakota", {lat: 44.299782, lng: -99.438828}],
	"EMISS.CO2-TOTV-TT-TO-TN.A" : ["Tennessee", {lat: 35.747845, lng: -86.692345}],
	"EMISS.CO2-TOTV-TT-TO-TX.A" : ["Texas", {lat: 31.054487, lng: -97.563461}],
	"EMISS.CO2-TOTV-TT-TO-UT.A" : ["Utah", {lat: 40.150032, lng: -111.862434}],
	"EMISS.CO2-TOTV-TT-TO-VT.A" : ["Vermont", {lat: 44.045876, lng: -72.710686}],
	"EMISS.CO2-TOTV-TT-TO-VA.A" : ["Virginia", {lat: 37.769337, lng: -78.169968}],
	"EMISS.CO2-TOTV-TT-TO-WA.A" : ["Washington", {lat: 47.400902, lng: -121.490494}],
	"EMISS.CO2-TOTV-TT-TO-WV.A" : ["West Virginia", {lat: 38.491226, lng: -80.954453}],
	"EMISS.CO2-TOTV-TT-TO-WI.A" : ["Wisconsin", {lat: 44.268543, lng: -89.616508}],
	"EMISS.CO2-TOTV-TT-TO-WY.A" : ["Wyoming", {lat: 42.755966, lng: -107.302490}]
}	

var seriesIDs = Object.keys(DATASETS_API_SERIES_ID);


function getDataFromURL( url ){
	var data = $.get(url, () => {
		console.log(url)
	})
		.done(function () {
			console.log(data)
			DATASETS_API_SERIES_ID[data.responseJSON.request.series_id].push(data.responseJSON.series[0].data);
		})
		.fail(function (error) {
			//fail
			console.error(error);
		})
}

function updateAllDatasets(){
	for( var stateID of seriesIDs ){
		var url = DATASET_QUERY_FORMAT + stateID
		getDataFromURL(url)
	}
	$("#updateTableBtn").prop( "disabled", false );
	$("#updateTableBtn").removeClass("disabled");
	$("#updateChartBtn").prop( "disabled", false );
	$("#updateChartBtn").removeClass("disabled");
}

function updateTable(){
	tableReference = $("#mainTableBody")[0];
	var newRow, co2Amount, state;

	for( var statesID of seriesIDs){
		newRow = tableReference.insertRow(tableReference.rows.length);
		state = newRow.insertCell(0);
		co2Amount = newRow.insertCell(1);
		state.innerHTML = DATASETS_API_SERIES_ID[statesID][0]
		co2Amount.innerHTML = DATASETS_API_SERIES_ID[statesID][2][0][1];
	}
} 


function updateChart(){
    var svg = d3.select("svg")
        margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 500 - margin.right - margin.left,
        height = 400 - margin.top - margin.bottom,
        g = svg.append("g").attr("transform","translate(" + margin.left + "," + margin.top + ")");
        
    var parseTime = d3.timeParse("%Y");
    
    var x = d3.scaleTime()
        .rangeRound([0, width]);
    
    var y = d3.scaleLinear()
        .rangeRound([height,0]);
    
    var line = d3.line()
        .x(function(data) {return x(data.date); })
        .y(function(data) {return y(data.close); });
    
    var data = DATASETS_API_SERIES_ID["EMISS.CO2-TOTV-TT-TO-TX.A"][2].map(function(data){
        return{
            date: parseTime(data[0]),
            close: data[1]
        };
    });
    
    console.log(data);
    
    x.domain(d3.extent(data, function(d) {return d.date; }));
    x.domain(d3.extent(data, function(d) {return d.close; }));
    
    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
        
    g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .text("Texas C02 Millions metric tons production")
    
    g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d",line);
}

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(39,-105),
    zoom:4,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

$(document).ready(function() {
	$("#getDataBtn").on("click", updateAllDatasets);
	$("#updateTableBtn").on("click", updateTable);
	$("#updateChartBtn").on("click", updateChart);
})



