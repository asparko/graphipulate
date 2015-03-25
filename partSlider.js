//Position and size the slider svg
var margin = {top: 5, right: 5, bottom: 5, left: 5},
    width = 600 - margin.left - margin.right,
    height = 40 - margin.bottom - margin.top;

var x = d3.scale.linear()
    .domain([0, 10])              //default to 10 partitions. update when file entered by user.
    .range([10, width-60])
    .clamp(true);

var part_value;

var community_brush = d3.svg.brush()
    .x(x)
    .extent([0, 0])
    .on("brush", brushed)         //this function moves the handle to the appropriate location as the user moves it
    .on("brushend", output);      //this just outputs the final position of the handle

var svgPSlide = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svgPSlide.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height / 2 + ")")
    .call(d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(function(d) { return d; })
      .tickSize(0)
      .tickPadding(12))
  .select(".domain")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "halo");

var slider = svgPSlide.append("g")
    .attr("class", "slider")
    .call(community_brush);

slider.selectAll(".extent,.resize")
    .remove();

slider.select(".background")
    .attr("height", height);

var handle = slider.append("circle")
    .attr("class", "handle")
    .attr("transform", "translate(0," + height / 2 + ")")
    .attr("r", 9);

slider.call(community_brush.event);    //position handle into initial place in bar

function brushed() {
  part_value = community_brush.extent()[0];
  if (d3.event.sourceEvent) { // not a programmatic event
     part_value = x.invert(d3.mouse(this)[0]);
     community_brush.extent([part_value, part_value]);
  }
  part_value = Math.round(part_value);    //ensure it snaps to whole numbers
  handle.attr("cx", x(part_value));
}

function output() {
  part_value = community_brush.extent()[0];
  part_value = Math.round(part_value);
  update();
}