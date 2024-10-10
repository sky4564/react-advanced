import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const key = import.meta.env.VITE_MAP_KEY

const containerStyle = {
	width: '700px',
	height: '700px'
};

const center = {
	lat: 14.018000,
	lng: 120.835941
};



function GoogleMapComponent() {
	return (
		<LoadScript
			googleMapsApiKey={key}
		>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={14}
			>
				<></>
			</GoogleMap>
		</LoadScript>
	)
}

export default React.memo(GoogleMapComponent)