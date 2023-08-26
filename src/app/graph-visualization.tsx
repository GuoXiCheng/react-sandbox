import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const GraphVisualization = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const nodes = [
            { id: "note1", label: "Note 1" },
            { id: "note2", label: "Note 2" },
            { id: "note3", label: "Note 3" },
            { id: "note4", label: "Note 4" },
            { id: "note5", label: "Note 5" }
            // Add more nodes as needed
        ];

        const links = [
            { source: "note1", target: "note2" },
            // Add more links as needed
        ];

        const svg = d3.select(svgRef.current);
        const width = +svg.attr("width");
        const height = +svg.attr("height");

        const simulation = d3.forceSimulation(nodes as any)
            .force("link", d3.forceLink(links).id((d: any) => d.id))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2));

        const link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("stroke", "#999")
            .attr("stroke-width", 2);

        const node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(nodes)
            .enter().append("circle")
            .attr("r", 10)
            .attr("fill", "#bababa");

        node.call(d3.drag()
            .on("start", dragstarted as any)
            .on("drag", dragged as any)
            .on("end", dragended as any) as any);

        simulation.on("tick", ticked);

        function ticked() {
            link
                .attr("x1", (d:any) => d.source.x)
                .attr("y1",  (d:any) => d.source.y)
                .attr("x2",  (d:any) => d.target.x)
                .attr("y2",  (d:any) => d.target.y);

            node
                .attr("cx",  (d:any) => d.x)
                .attr("cy",  (d:any) => d.y);
        }

        function dragstarted(event: { active: any; }, d: { fx: any; x: any; fy: any; y: any; }) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event: { x: any; y: any; }, d: { fx: any; fy: any; }) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event: { active: any; }, d: { fx: null; fy: null; }) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    }, []);

    return (
        <svg ref={svgRef} width={800} height={800}></svg>
    );
};

export default GraphVisualization;
