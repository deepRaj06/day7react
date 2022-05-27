import React, {useEffect, useState} from 'react';
import axios from 'axios'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    // For total pages 
    const[totalCount, setTotalCount] = useState(0);
    const[page, setPage] = useState(1);
    // For limit
    const[limit, setLimit] = useState(5)
   
      useEffect( () => {
          axios.get(`http://localhost:8000/todos?_page=${page}&_limit=${limit}`)
               .then( (res) => {
                  setTodos(res.data);
                  setTotalCount(Number(res.headers["x-total-count"]));
               });
      }, [page, limit]);
    
      return (
        <div className="App">
    
          {todos.map( (todo) => (
            <div key={todo.id}>
              {todo.id} {` : `} {todo.value}
            </div>
          ) )}
    
          <button 
          disabled={page<=1}
          onClick={ () => setPage(page-1)}>
            {`<`}
          </button>
    
          <select onChange={ (e) => setLimit(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
    
          <button 
          disabled={totalCount < page * limit}
          onClick={ () => setPage(page+1)}>
            {`>`}
          </button>
        </div>
      );
}

export default Todos