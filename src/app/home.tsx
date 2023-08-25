"use client"
import { useRef, useEffect } from "react";
import * as d3 from "d3";

export default function Home() {
    return (
        <>
        <Circle />
        </>
    );
}

function Circle() {
  return (
    <svg>
      <circle
        cx="150"
        cy="77"
        r="40"
      />
    </svg>
  );
  }