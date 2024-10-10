import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from './ui/button';

export default function HttpsGet() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getTodoList();
	}, []);

	interface todoItem {
		text: string,
		done: boolean
	}

	const dummyData: todoItem = {
		text: 'test data',
		done: false
	}
	const updateDummy: todoItem = {
		text: 'is updated data',
		done: false
	}

	async function getTodoList() {
		try {
			const response = await axios.get('http://localhost:4000/api/todo');
			setData(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err)
		}
	}

	async function addTodo() {
		try {
			const res = await axios.post('http://localhost:4000/api/todo', dummyData)
			console.log(res)
			getTodoList();
		} catch (err) {
			console.log(err)
		}
	}

	async function updateTodo(id: number, data: todoItem) {
		try {
			const res = await axios.put(`http://localhost:4000/api/todo/${id}`, data)
			console.log(res)
		} catch (err) {
			console.log(err)
		}
	}

	function submitTodo() {
		updateTodo(1, updateDummy);
		getTodoList()
	}



	if (loading) return <div>로딩 중...</div>;

	return (
		<>
			<div>
				<div className=' mb-8'>
					<h1>데이터:</h1>
					{JSON.stringify(data)}
				</div>
				<div className='flex flex-col space-y-5'>
					<Button className=' bg-purple-500 rounded-2xl hover:bg-purple-950 w-40' onClick={addTodo}> post data</Button>
					<Button className=' bg-purple-500 rounded-2xl hover:bg-purple-950 w-40' onClick={submitTodo}> update data</Button>
				</div>
			</div>
		</>
	);
}

