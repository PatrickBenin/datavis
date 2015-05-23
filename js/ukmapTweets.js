var width = 900;
var height = 700;

var graphics = d3.select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

// Don't forget to change the data file name!
d3.json("data/usersGraph.json", loadUserData);
d3.json("data/uk.json", loadMapData);
function loadMapData(error, dataset) {
	if (error) {
		//	console.log(error);
	}
	else {
		console.log(dataset)
		drawData(dataset);
	}
};
function loadUserData(error, dataset) {
	if (error) {
	//	console.log(error);
	}
	else {
		console.log(dataset)
		drawUserData(dataset);
	}
};

function drawData(dataset) {

	//var countries=topojson.feature(dataset,dataset.objects.countries).features;

	var mapProjection=d3.geo.albers()
		.center([2,54])
		.rotate([0,0])
		.scale(4000);

	var geoPath=d3.geo.path()
		.projection(mapProjection);

	//var color=d3.scale.ordinal()
	//	.range([
	//		"#c6def","9ecae1","6baed6","#4292c6","#2171b5","#0851919c","#08306b"
	//		]);
	console.log(dataset);
	var subunits=topojson.feature(dataset,dataset.objects.subunits).features;
	console.log(subunits);

	var color=d3.scale.ordinal()
		.domain(["ENG","SCT","WLS","NIR"])
		.range([
		"#dcd","#ddc","#cdd","#cdc"
	]);

	graphics.selectAll("path")
		.data(subunits)
		.enter()
		.append("path")
		.attr("d",geoPath)
		.style("fill",function(subunit){ return color(subunit.id);});



	// Draw your data
}

function getLatitude(tweet){
	return tweet.geo.coordinates[1];
}

function getLongitude(tweet){
	return tweet.geo.coordinates[0];
}




function drawUserData(dataset) {

	for(var i=0; i < dataset.nodes.length;i++){
		var user=dataset.nodes[i];
		var coordinates=[d3.mean(user.tweets,getLatitude),d3.mean(user.tweets,getLongitude)];
		user.geo=coordinates;
	};

	//var countries=topojson.feature(dataset,dataset.objects.countries).features;

	var mapProjection=d3.geo.albers()
		.center([2,54])
		.rotate([0,0])
		.scale(4000);

	var geoPath=d3.geo.path()
		.projection(mapProjection);

	//var color=d3.scale.ordinal()
	//	.range([
	//		"#c6def","9ecae1","6baed6","#4292c6","#2171b5","#0851919c","#08306b"
	//		]);
		//var subunits=topojson.feature(dataset,dataset.objects.subunits).features;

	console.log(dataset.nodes);
		graphics.selectAll(".link")
		.data(dataset.links)
		.enter()
		.append("line")
			.attr("class", "link")
		.style("stroke","#999")
			.style("opacity",0.1)
			.attr("x1", function(link) {
				return mapProjection(dataset.nodes[link.source].geo)[0];

			})
				.attr("y1", function(link){
				return mapProjection(dataset.nodes[link.source].geo)[1];
			})

			.attr("x2", function(link) {
				return mapProjection(dataset.nodes[link.target].geo)[0];

			})
			.attr("y2", function(link) {
				return mapProjection(dataset.nodes[link.target].geo)[1];

			})

	// Draw your data
}
