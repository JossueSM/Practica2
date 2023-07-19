
const express=require('express');
const app=express();
const port = 3001;

app.use(express.json());

app.get('', (req,res)=>{

    res.send('Bienvenido a mi sitio web'+
    '<br>'+
    '<a href=about><h1>Acerca de nosotros</h1></a>'
    +'<br>'+
    '<a href=gastos><h1>Gastos</h1></a>');

})


app.listen(port, ()=>{
console.log('Servidor escuchando en el puerto ' + port);
})


app.get('/about', (req,res)=>{
    res.send('<h1>Acerca de nosotros</h1>');
});
   

app.get('/gastos', (req,res)=>{
    res.json(
    {
        gasto:'Salud',
        monto:14575.60,
        informacion:'Corresponde a consultas médicas, pagos de seguros, medicinas'
    }
    );
});


app.post('/calculo', (req,res)=>{
    console.log(req.body);
    res.send('Cálculo impuesto a la renta');
});


app.post('/usuarios/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario nuevo registrado');
});


app.put('/usuarios/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Datos modificados del usuario: '+req.params.id);
});


app.delete('/usuarios/:id',(req, res)=>{
    res.send('Usuario '+ req.params.id +' borrado');
});

app.get('/usuarios', (req,res)=>{
    res.json(
        [{
            ci:1500853311,
            nombre:"Jossue",
            apellido:"Simancas"
        },
        {
            ci:150085331,
            nombre:"Jose",
            apellido:"Simas"
        }
        ]
        );
});

app.put('/gastos/:id', (req,res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Datos modificados de los gastos: '+req.params.id);
});

app.delete('/gastos/:id', (req,res)=>{
    res.send('Datos eliminados de los gastos: '+req.params.id);
});
       
   
  