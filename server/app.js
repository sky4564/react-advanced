import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

// 파싱
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 4000


let id = 1

const todoList = [{
    id: id,
    text: '할일 1',
    done: false,
}];

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/todo', (req, res) => {
    res.json(todoList);
})

app.post('/api/todo', (req, res) => {
    const { text, done } = req.body
    console.log(text, done)
    todoList.push({
        id: id++,
        text,
        done,
    })
    return res.send('success')
})

app.put('/api/todo/:id', (req, res) => {
    console.log('updating ! ')
    const todoId = parseInt(req.params.id);
    const { text, done } = req.body;

    const todoIndex = todoList.findIndex(todo => todo.id === todoId);

    if (todoIndex === -1) {
        return res.status(404).send('Todo not found');
    }

    todoList[todoIndex] = {
        ...todoList[todoIndex],
        text: text || todoList[todoIndex].text,
        done: done !== undefined ? done : todoList[todoIndex].done
    };

    return res.send('Todo updated successfully');
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})