const url = 'https://www.youtube.com/watch?v=cjrt3NilcNw'

fetch(url)
.then(response => response.json())
.then(data =>{
    console.log(data)
})

.catch(err=>console.log(err))