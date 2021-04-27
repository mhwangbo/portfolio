import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import { About } from './About';
import './App.css';

function App() {
  return (
    <div className="mainScreen">
          <About />
    </div>
  );
}

export default App;
