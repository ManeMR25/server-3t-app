const express=require('express');
const app=express();

app.get('/', (request, response) => {
    response.send('welcome to my application server......Susmeeta ')
})

app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});
