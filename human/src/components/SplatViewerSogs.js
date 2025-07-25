import React from 'react';

const SplatViewerSogs = () => {
  return (
    <iframe
      id="viewer"
      title="Splat Viewer"
      src="https://superspl.at/s?id=3fc59caa"
      style={{ width: '800px', height: '500px' }}
      allow="fullscreen; xr-spatial-tracking"
    />
  );
};

export default SplatViewerSogs;