function getTodo(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
     .then(res => showOutput(res))
     .catch(err => console.log(err));

// axios({
//     method: 'get',
//     url: 'https://jsonplaceholder.typicode.com/todos',
//     params: {
//         _limit: 6
//     }
// })
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err));

}

function postTodo(){
    axios.post('https://jsonplaceholder.typicode.com/todos',{
        title: 'New todo',
        completed: false
    })
    .then(res => showOutput(res))
    .catch(err => console.log(err));
    
}

function putTodo(){
    axios.put('https://jsonplaceholder.typicode.com/todos/1',{
    title: 'Updated todo',
    completed: true
})
    .then(res => showOutput(res))
    .catch(err => console.log(err));

}

function patchTodo(){
    axios.patch('https://jsonplaceholder.typicode.com/todos/1',{
    title: 'Updated todo',
    completed: true
})
    .then(res => showOutput(res))
    .catch(err => console.log(err));

}


function deleteTodo(){
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => showOutput(res))
    .catch(err => console.log(err));

}


function showOutput(res){
    document.getElementById('res').innerHTML= `
    <h4>Status: ${res.status}</h4>
    
    <div>Header</div>
    <div><pre>${JSON.stringify(res.headers,null,2)}</pre></div>

    <div>Data</div>
    <div><pre>${JSON.stringify(res.data,null,2)}</pre></div>

    <div>Configr</div>
    <div><pre>${JSON.stringify(res.config,null,2)}</pre></div>
    `;
};


document.getElementById('get').addEventListener('click',getTodo);
document.getElementById('post').addEventListener('click',postTodo);
document.getElementById('put').addEventListener('click',putTodo);
document.getElementById('patch').addEventListener('click',patchTodo);
document.getElementById('delete').addEventListener('click',deleteTodo);
