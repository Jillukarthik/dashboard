import React, { useState, useEffect } from 'react';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box, Center } from '@chakra-ui/react';

const ChoroplethMap = () => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    fetch('src/world.geojson')
      .then((response) => response?.json())
      .then((data) => {
        setMapData(data);
      });
  }, []);

  return (
    <Box p={4} borderRadius="md" boxShadow="md">
      <Center>
        <Box
          height="500px"
          width="100%"
          position="relative"
          boxShadow="lg"
          borderRadius="md"
          overflow="hidden"
        >
          <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {mapData && (
              <GeoJSON data={mapData}/>
            )}
          </MapContainer>
        </Box>
      </Center>
    </Box>
  );
};

export default ChoroplethMap;
