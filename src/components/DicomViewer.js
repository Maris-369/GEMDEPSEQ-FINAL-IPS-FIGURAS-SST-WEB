import React, { useEffect, useRef } from 'react';
import * as cornerstone from 'cornerstone-core';
import * as cornerstoneTools from 'cornerstone-tools';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';

export default function DicomViewer({ dicomFile }) {
  const imageRef = useRef(null);

  useEffect(() => {
    // 1. Configuración del loader
    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
    cornerstoneWADOImageLoader.webWorkerManager.initialize({
      maxWebWorkers: navigator.hardwareConcurrency || 4,
      startWebWorkersOnDemand: true,
    });

    // 2. Inicialización
    const element = imageRef.current;
    cornerstone.enable(element);

    // 3. Carga de imagen
    const imageId = `wadouri:${dicomFile}`;
    cornerstone.loadImage(imageId).then(image => {
      cornerstone.displayImage(element, image);
      
      // Herramientas básicas
      cornerstoneTools.addTool(cornerstoneTools.WwwcTool);
      cornerstoneTools.setToolActive('Wwwc', { mouseButtonMask: 1 });
    });

    return () => cornerstone.disable(element);
  }, [dicomFile]);

  return (
    <div className="dicom-viewer">
      <div 
        ref={imageRef} 
        style={{ width: '100%', height: '500px' }}
      />
      <div className="toolbar">
        <button onClick={() => cornerstoneTools.setToolActive('Wwwc', { mouseButtonMask: 1 })}>
          Window/Level
        </button>
        <button onClick={() => cornerstoneTools.setToolActive('Pan', { mouseButtonMask: 1 })}>
          Pan
        </button>
        <button onClick={() => cornerstoneTools.setToolActive('Zoom', { mouseButtonMask: 1 })}>
          Zoom
        </button>
      </div>
    </div>
  );
}