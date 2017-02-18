var csvDataSet = [];

d3.csv("baseball_data.csv", function(dataSet) {

	for (var i = 0; i < dataSet.length; i++) {
		csvDataSet[i] = {
			name: dataSet[i]["name"], 
			height: dataSet[i]["height"], 
			weight: dataSet[i]["weight"], 
			avg: dataSet[i]["avg"], 
			hr: dataSet[i]["HR"],
			hand: dataSet[i]["handedness"]
		}
	}

	console.log(csvDataSet);

});