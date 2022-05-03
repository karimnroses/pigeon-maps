import React from 'react'
import { useState } from 'react'
import { Map, Marker } from 'pigeon-maps'


const MyMap = ({geo}) => {
  const [center, setCenter] = useState(geo)
  const [zoom, setZoom] = useState(13)
  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`

  return (
      <>
      <div >
    <Map 
      height={500}
      center={center} 
      zoom={zoom}
      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }} 
    >
     <Marker 
        width={50}
        anchor={geo} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      />
    </Map>
    </div>
    </>
  )
}

export default MyMap;