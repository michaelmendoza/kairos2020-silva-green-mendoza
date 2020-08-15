import * as d3 from 'd3';
import React, { Component }  from 'react';

class PieChart extends Component {
    constructor(props) { 
        super(props);
        this.id = 'chart-2';
        this.width = 300; // ViewBox Width
        this.height = 300; // ViewBox Height
        this.margin = { top: 40, right: 20, bottom: 20, left: 20 };    
        this.data = props.data;
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
            
            //.attr("preserveAspectRatio", "xMinYMin meet")
            //.attr("viewBox", "0 0 " + this.width + " " + this.height)
            //.classed("svg-content", true)	
    }
    
    draw() {
        var data = this.data;
        var colors = ['#cfecf7', '#a0d9ef', '#62c1e5', '#20a7db', '#1c96c5'];
        var labels = this.props.labels;
        var delay = 0;
        
		// Get Scale
		var width = this.width - this.margin.left - this.margin.right;
        var height = this.height - this.margin.top - this.margin.bottom;
 
        // Add margins to graph     
        var g = this.svg.append("g")
        .attr("transform", "translate(" + (width / 2 + this.margin.left) + "," + (height / 2 + this.margin.top) + ")");
                
        var pie = d3.pie()
			.padAngle(.02)
			.sort(null);
		var arc = d3.arc()
			.innerRadius(0)
			.outerRadius(height/2);
        
        g.selectAll("path")
			.data(pie(data))
			.enter()
			.append("path")
			.attr("fill", function(d,i) { return colors[i]; })
			.transition()
			.delay(function(d, i) { return i * 200 + delay; })
			.duration(200)
			.attrTween('d', function(d) {
				var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
				return function(t) {
					d.endAngle = i(t);
					return arc(d);
				}
            })

        // Create Labels
        var labelArc = d3.arc().innerRadius(0.10 * height).outerRadius(0.5 * height);
        this.svg.append("g")
            .attr("transform", "translate(" + (width / 2 + this.margin.left) + "," + (height / 2 + this.margin.top) + ")")
            .selectAll('label')
            .data(pie(data))
            .enter()
            .append('text')
            .text(function(d,i) { return labels[i]} )
            .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")";  })
            .style("text-anchor", "middle")
            .style("font-size", 12)

        // Create title
        this.svg.append("text")
            .attr("x", (width / 2 +  this.margin.left) )             
            .attr("y", 0 + (this.margin.top / 2))
            .attr("text-anchor", "middle")  
            .style("font-size", "16px") 
            .style("text-decoration", "underline")  
            .text(this.props.title);    
    }

    render() {
        return (
            <div id={this.id} className="chart"></div>
        )
    }
}

export default PieChart;
