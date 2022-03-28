import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './create-todo-field/CreateTodoField'

const data = [
    {
        _id: 'ww1',
        title: 'Finish the essay collaboration',
        isCompleted: false
    },
    {
        _id: 'ww2',
        title: 'Read the next chapter of book',
        isCompleted: false
    },
    {
        _id: 'ww3',
        title: 'Send the finish assignment',
        isCompleted: false
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id =>
        setTodos([...todos].filter(t => t._id !== id))




    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold mb-10 text-center'>Todo for junior</h1>
            {todos.map(todo => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo} />
            ))}

            <CreateTodoField setTodos={setTodos} />
        </div>
    )
}

export default Home