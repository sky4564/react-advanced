import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const apiKey = import.meta.env.VITE_MAP_KEY

const containerStyle = {
	width: '100%',
	height: '700px'
};

const center = {
	lat: 37.5665,
	lng: 126.9780
};

const MyComponent = () => {

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: apiKey,
		libraries: ['marker'],
		version: 'weekly',
	})

	const onLoad = (map: google.maps.Map) => {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
		new window.google.maps.marker.AdvancedMarkerElement({
			position: center,
			map: map,
		});
	};

	if (!isLoaded) return <div>Loading...</div>;

	return (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={10}
			onLoad={onLoad}
		>
		</GoogleMap>
	);
}

export default MyComponent;