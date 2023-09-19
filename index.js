const express = require('express');
const app = express();

app.use(express.json());

const cars = [
    {ID: 1, Marca: "Toyota", Color: "Rojo", Condición: "Nuevo", Año: 2023},
    {ID: 2, Marca: "Honda", Color: "Azul", Condición: "Nuevo", Año: 2023},
    {ID: 3, Marca: "Ford", Color: "Gris", Condición: "Usado", Año: 2019},
    {ID: 4, Marca: "Chevrolet", Color: "Negro", Condición: "Usado", Año: 2020},
    {ID: 5, Marca: "Volkswagen", Color: "Blanco", Condición: "Nuevo", Año: 2023},
    {ID: 6, Marca: "Nissan", Color: "Plateado", Condición: "Usado", Año: 2018},
    {ID: 7, Marca: "Kia", Color: "Verde", Condición: "Nuevo", Año: 2023},
    {ID: 8, Marca: "Hyundai", Color: "Naranja", Condición: "Nuevo", Año: 2023},
    {ID: 9, Marca: "Mazda", Color: "Amarillo", Condición: "Usado", Año: 2021},
    {ID: 10, Marca: "Subaru", Color: "Marrón", Condición: "Usado", Año: 2020}
];

app.get('/', (req, res) =>{
    res.send('NodeJS API');
});

app.get('/api/cars', (req, res) =>{
    res.send(cars);
});

app.get('/api/cars/:id', (req, res) =>{
    const car = cars.find(c => c.ID === parseInt(req.params.id));
    if(!car){
        return res.status(404).send('No se encontro el Automóvil');
    }else{
        res.send(car);
    }
});

app.post('/api/cars/', (req, res) =>{
    const cars = {
        id: cars.length + 1,
        brand: req.body.Marca,
        color: req.body.Color,
        condition: req.body.Condición,
        year: parseInt(req.body.Año)
    };
    cars.push(cars);
    res.send(cars);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));