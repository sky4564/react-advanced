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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})