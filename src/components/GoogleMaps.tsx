import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '400px'
};

const center = {
	lat: 37.5665, // 서울의 위도
	lng: 126.9780 // 서울의 경도
};

function MyComponent() {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: "YOUR_API_KEY" // 여기에 본인의 API 키를 넣으세요
	})

	const [map, setMap] = React.useState(null)

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
		setMap(map)
	}, [])

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null)
	}, [])

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={10}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			<Marker position={center} />
		</GoogleMap>
	) : <></>
}

export default React.memo(MyComponent)