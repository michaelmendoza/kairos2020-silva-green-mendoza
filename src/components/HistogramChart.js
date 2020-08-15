import * as d3 from 'd3';
import React, { Component }  from 'react';

class HistogramChart extends Component {

    constructor(props) { 
        super(props);
        this.id = 'chart-histogram';
        this.width = 400; // ViewBox Width
        this.height = 400; // ViewBox Height
        this.margin = { top: 40, right: 40, bottom: 40, left: 50 };    
        this.data = props.data;
        this.fillColor = '#89D7F9'; //"#69b3a2";
        this.textColor = '#222222';
        this.binMax = 10;
        this.bins = 10;
    }
    
    componentDidMount() {
        this.create();
        this.draw();
    }

    componentDidUpdate() {
        this.redraw();
    }

    create() {
        this.svg = d3.select("#" + this.id)
            .append("svg")
            .attr("width", this.width)
			.attr("height", this.height)	
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 400 400")
            .classed("svg-content", true);
    }
    
    draw() {
        var data = this.props.data;
        
		// Get Scale
		var width = this.width - this.margin.left - this.margin.right;
        var height = this.height - this.margin.top - this.margin.bottom;
 
        // Add margins to graph     
        var g = this.svg.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
                
        // Get x scale
        var xmax = this.binMax;
		var x = d3.scaleLinear()
			.domain([0, xmax])
            .range([0, width]);
        
        var histogram = d3.histogram()
            .value(function(d) { return d - 0.1; })
            .domain(x.domain())
            .thresholds(x.ticks(this.bins - 1))

        var bins = histogram(data);
        //console.log(bins);

        // Get y scale 
        var ymax = d3.max(bins, function(d) { return d.length; });
		var y = d3.scaleLinear()
			.domain([0 , ymax])
			.range([height, 0]);

        // Create an axis component with d3.axisBottom
        this.xAxis = this.svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(" + this.margin.left + "," + (height + this.margin.top) + ")")
            .call(d3.axisBottom(x)); 
        
        // Create an axis component with d3.axisLeft       
        this.yAxis = this.svg.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + (this.margin.left) + ", " + this.margin.top + ")")
            .call(d3.axisLeft(y)); 

        // Create histogram
        this.bar = g.selectAll("rect")
            .data(bins)
            .enter()
            .append("rect")
                .attr("x", 1)
                .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
                .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
                .attr("height", function(d) { return height - y(d.length); })
                .style("fill", this.fillColor)
        
        var format_count = d3.format(",.0f"); 
        this.text = g.selectAll("text") 
            .data(bins)
            .enter()
            .append("text")
                .attr("dy", "1.5em")
                .attr("y", function(d) { return y(d.length); })
                .attr("x", function(d) { return  x(d.x0 + 0.5) ; })
                .attr("text-anchor", "middle")
                .style("fill", this.textColor)
                .style("font-size", 10)
                .style("opacity", function(d, i) { return i >= bins.length - 1 ? 0 : 1})
                .text(function(d) {
                    return format_count(d.length);
                });

        // Label for the x axis
        g.append("text")             
        .attr("transform",
                "translate(" + (width/2) + " ," + 
                            (height + this.margin.top) + ")")
        .style("text-anchor", "middle")
        .text("Score");

        // Label for the y axis
        g.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - this.margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Count");  
    }

    redraw() {
        var data = this.props.data;

		// Get Scale
		var width = this.width - this.margin.left - this.margin.right;
        var height = this.height - this.margin.top - this.margin.bottom;
 
        // Get x scale
        var xmax = this.binMax;
		var x = d3.scaleLinear()
			.domain([0, xmax])
            .range([0, width]);
        
        var histogram = d3.histogram()
            .value(function(d) { return d - 0.1; })
            .domain(x.domain())
            .thresholds(x.ticks(this.bins - 1))

        var bins = histogram(data)
        //console.log(bins);

        // Get y scale 
        var ymax = d3.max(bins, function(d) { return d.length; });
		var y = d3.scaleLinear()
			.domain([0 , ymax])
			.range([height, 0]);

        // Create an axis component with d3.axisBottom
        this.xAxis.attr("class", "x axis")
            .transition()
            .duration(1000)
            .attr("transform", "translate(" + this.margin.left + "," + (height + this.margin.top) + ")")
            .call(d3.axisBottom(x)); 
        
        // Create an axis component with d3.axisLeft       
        this.yAxis.attr("class", "y axis")
            .transition()
            .duration(1000)
            .attr("transform", "translate(" + (this.margin.left) + ", " + this.margin.top + ")")
            .call(d3.axisLeft(y)); 

        // Create histogram
        this.bar.data(bins)
            .transition()
            .duration(1000)
            .attr("x", 1)
            .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
            .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
            .attr("height", function(d) { return height - y(d.length); })
            .style("fill", this.fillColor)

        var format_count = d3.format(",.0f"); 
        this.text.data(bins)
            .transition()
            .duration(1000)
            .attr("y", function(d) { return y(d.length); })
            .text(function(d) {
                return d === 0 ? "" : format_count(d.length);
            });            
    }

    render() {
        return (
            <div id={this.id} className="histogram-chart"></div>
        )
    }
}

export default HistogramChart;
