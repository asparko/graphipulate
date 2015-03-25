var width = 1250,
    height = 500,
    shiftKey,
    graph;

//built in D3 color palatte
//var color = d3.scale.category20b();
var colorPalette = ["#fee08b","#3288bd","#9e0142","#f46d43","#abdda4","#dae892","#fdae61","#66c2a5","#d53e4f","#5e4fa2"];

var color = d3.scale.ordinal()
    .range(colorPalette);

var radiusScale = d3.scale.log();

var fileEntered = 0;

var arc = d3.svg.arc();

var pie = d3.layout.pie().padAngle(.02);

var svg = d3.select("body")
      .on("keydown.brush", keydown)
      .on("keyup.brush", keyup)
      .each(function() { this.focus(); })
    .append("svg")
      .attr("width", width)
      .attr("height", height);

var link,
    circles,
    pies,
    pies2,
    numberPies=0,
    currPieName=0,

    partition_color=0;
    partition_commun=0;

    numNodes = 0,                           //total number of nodes
    numPartitions = 0,                      //num different partitions
    communities =[],                        //list of lists: community number of each node in each partition
    numCommunities = [],                    //array of length numPartitions with the num of communities in each partition

    nodesToCollapse = [],
    piesToCollapse = [],
    toCollapse = [],

    nodesToFreeze =[],
    piesToFreeze = [],
    toFreeze = [],

    nodesToUnfreeze = [],
    piesToUnfreeze = [],
    toUnfreeze = [],

    pieData = [],
	pieNames = [], //easily searchable array of pieNames that will match the ordering of pieData for easy deletion of pies
    
    insideLinks = [],
    interLinks = [],
    interLinks_orig =[];


var brush = svg.append("g")
    .datum(function() { return {selected: false, previouslySelected: false}; })
    .attr("class", "brush");