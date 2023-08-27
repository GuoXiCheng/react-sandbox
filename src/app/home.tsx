"use client"
import { useEffect } from "react";
import GraphVisualization from "./graph-visualization";

export default function Home() {
    const nodes = [
        { id: "note1", label: "Note 1" },
        { id: "note2", label: "Note 2" },
        { id: "note3", label: "Note 3" },
        { id: "note4", label: "Note 4" },
        { id: "note5", label: "Note 5" }
    ];
    
    const links = [
        { source: "note1", target: "note2" },
        { source: "note2", target: "note3" },
    ];

    useEffect(()=>{

    })
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <GraphVisualization nodes={nodes} links={links}/>
        </div>
    );
}
