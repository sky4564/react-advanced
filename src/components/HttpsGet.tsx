import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HttpsGet() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://dog.ceo/api/breeds/image/random');
				setData(response.data);
				setLoading(false);
			} catch (err) {
				console.log(err)
			}
		};
		fetchData();
	}, []);

	if (loading) return <div>로딩 중...</div>;

	return (
		<div>
			<h1>데이터:</h1>
			{JSON.stringify(data)}
		</div>
	);
}

