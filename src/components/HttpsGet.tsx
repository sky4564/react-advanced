import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from './ui/button';

export default function HttpsGet() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:4000/api/todo');
				setData(response.data);
				setLoading(false);
			} catch (err) {
				console.log(err)
			}
		};
		fetchData();
	}, []);

	const dummyData = {
		text: 'test data',
		done: false
	}

	async function addTodo() {
		try {
			const res = await axios.post('http://localhost:4000/api/todo', dummyData)
			console.log(res)
		} catch (err) {
			console.log(err)
		}
	}

	if (loading) return <div>로딩 중...</div>;

	return (
		<>
			<div>
				<div className=' mb-8'>
					<h1>데이터:</h1>
					{JSON.stringify(data)}
				</div>
				<Button className=' bg-purple-500 rounded-2xl hover:bg-purple-950' onClick={addTodo}> post data</Button>
			</div>
		</>
	);
}

