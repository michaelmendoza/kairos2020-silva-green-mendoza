import * as d3 from 'd3';
import React, { Component }  from 'react';



class HistogramChart extends Component {
    constructor(props) { 
        super(props);
        this.id = 'chart-histogram';
        this.width = 500; // ViewBox Width
        this.height = 500; // ViewBox Height
        this.margin = { top: 40, right: 40, bottom: 40, left: 50 };    
        this.data = props.data;
        this.fillColor = '#89D7F9'; //"#69b3a2";
        this.binMax = 10;
        this.bins = 10;
    }
    
    componentDidMount() {
        this.create();
        this.draw();
    }

    componentDidUpdate() {
        this.draw();
    }
    
    create() {
        this.svg = d3.select("#" + this.id)
            .append("svg")
            .attr("width", this.width)
			.attr("height", this.height)	
    }
    
    draw() {
        var data = this.data;
        var whiteLineColor = '#FFFFFF';

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
            .value(function(d) { return d; })
            .domain(x.domain())
            .thresholds(x.ticks(this.bins - 1))

        var bins = histogram(data)

        // Get y scale 
        var ymax = d3.max(bins, function(d) { return d.length; });
		var y = d3.scaleLinear()
			.domain([0 , ymax])
			.range([height, 0]);

        // Create an axis component with d3.axisBottom
        this.svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(" + this.margin.left + "," + (height + this.margin.top) + ")")
            .call(d3.axisBottom(x)); 
        
        // Create an axis component with d3.axisLeft       
        this.svg.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + (this.margin.left) + ", " + this.margin.top + ")")
            .call(d3.axisLeft(y)); 

        // Create histogram
        g.selectAll("rect")
            .data(bins)
            .enter()
            .append("rect")
                .attr("x", 1)
                .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
                .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
                .attr("height", function(d) { return height - y(d.length); })
                .style("fill", this.fillColor)
        
    }

    render() {
        return (
            <div id={this.id} className="chart"></div>
        )
    }
}

export default HistogramChart;
