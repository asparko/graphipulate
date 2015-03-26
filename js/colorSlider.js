//Use this to position and size the slider svg

var margin = {top: 5, right: 5, bottom: 5, left: 50},
    width = 610 - margin.left - margin.right,
    height = 40 - margin.bottom - margin.top;

var x_col = d3.scale.linear()
    .domain([0, 10])
    .range([10, width-10])
    .clamp(true);

var color_brush = d3.svg.brush()
    .x(x_col)
    .extent([0, 0])
    .on("brush", brushed)         //this function moves the handle to the appropriate location as the user moves it
    .on("brushend", output);      //this just outputs the final position of the handle

var col_value;

var svgCSlide = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svgCSlide.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height / 2 + ")")
    .call(d3.svg.axis()
      .scale(x_col)
      .orient("bottom")
      .tickFormat(function(d) { return d; })
      .tickSize(0)
      .tickPadding(12))
  .select(".domain")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "halo");

var color_slider = svgCSlide.append("g")
    .attr("class", "slider")
    .call(color_brush);

color_slider.selectAll(".extent,.resize")
    .remove();

color_slider.select(".background")
    .attr("height", height);

var color_handle = color_slider.append("circle")
    .attr("class", "handle")
    .attr("transform", "translate(0," + height / 2 + ")")
    .attr("r", 9);

color_slider.call(color_brush.event);    //position handle into initial place in bar

function brushed() {
  col_value = color_brush.extent()[0];
  if (d3.event.sourceEvent) { // not a programmatic event
     col_value = x_col.invert(d3.mouse(this)[0]);
     color_brush.extent([col_value, col_value]);
  }
  col_value = Math.round(col_value);    //ensure it snaps to whole numbers
  color_handle.attr("cx", x_col(col_value));
}

function output() {
  col_value = color_brush.extent()[0];
  col_value = Math.round(col_value);
  if (fileEntered ==1){
    update();
  };
}