import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { SimulationLinkDatum, SimulationNodeDatum } from 'd3';

export interface MyNodeDatum extends SimulationNodeDatum {
    id: string;
    label: string;
}

export interface MyLinksDatum extends SimulationLinkDatum<MyNodeDatum> {
    source: string;
    target: string;
}

export interface GraphVisualizationProps {
    nodes: MyNodeDatum[],
    links: MyLinksDatum[]
}

const GraphVisualization: React.FC<GraphVisualizationProps> = (props) => {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // append之前清理
        svg.selectAll("*").remove();

        const width = window.innerWidth;
        const height = window.innerHeight;

        const simulation = d3.forceSimulation(props.nodes)
            .force("link", d3.forceLink(props.links).id((d: any) => d.id).distance(100))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2));

        const link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(props.links)
            .enter().append("line")
            .attr("stroke", "#999")
            .attr("stroke-width", 2);

        const node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(props.nodes)
            .enter().append("circle")
            .attr("r", 10)
            .attr("fill", "#bababa");

        const nodeText = svg.selectAll(null)
            .data(props.nodes)
            .enter()
            .append("text")
            .text(d => d.label)
            .style("text-anchor", "middle")
            .style("font-size", 12)
            .style("fill", "black");

        node.call(d3.drag()
            .on("start", dragstarted as any)
            .on("drag", dragged as any)
            .on("end", dragended as any) as any);

        // 鼠标悬浮事件
        node.on("mouseover", function () {
            d3.select(this).style("cursor", "pointer");
        })

        node.on("mouseout", function () {
            d3.select(this).style("cursor", "default");
        })

        simulation.on("tick", ticked);

        function ticked() {
            link
                .attr("x1", (d: any) => d.source.x)
                .attr("y1", (d: any) => d.source.y)
                .attr("x2", (d: any) => d.target.x)
                .attr("y2", (d: any) => d.target.y);

            node
                .attr("cx", (d: any) => d.x)
                .attr("cy", (d: any) => d.y);

            nodeText
                .attr("x", d => d.x as number)
                .attr("y", d => d.y as number + 20)
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
    }, [props.links, props.nodes]);

    return (
        <svg ref={svgRef} width='100vw' height='100vh'></svg>
    );
};

export default GraphVisualization;
