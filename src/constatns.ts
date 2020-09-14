export const users = [
    {
        id:"1",
        name:"isaac",
        email:"isaac@"
    },
    {
        id:"2",
        name:"Joana",
        email:"joana@"
    },
    {
        id:"3",
        name:"boby",
        email:"boby@"
    }
]


export const recipesConstatns = [
    {
        id:"1",
        name:"Arroz con tuco",
        description:"tiempo de coccion 1 hora ",
        ingredients:"cebolla , arroz , morron ",
        category:{
            id:1,
            name:"Arroz"
        } ,
        user:{
            id:"1",
            name:"joana"
        }
    },
    {
        id:"2",
        name:"Fideos con tuco",
        description:"en muy poco tiempo",
        ingredients:"perejil , morron , carne",
        category:{
            id:2,
            name:"Fideos"
        } ,
        user:{
            id:"1",
            name:"joana"
        }
    },
    {
        id:"3",
        name:"Fideos con crema",
        description:"en 15 minutos unos ricos fidens",
        ingredients:"manteca , harina , cebolla de verdeo ",
        category:{
            id:2,
            name:"Fideos"
        } ,
        user:{
            id:"2",
            name:"isaac"
        }
    },
    {
        id:"4",
        name:"Carne al horno",
        description:"2 horas de coccion a fuego lento",
        ingredients:"carne , condiiendtos",
        category:{
            id:3,
            name:"Carnes"
        },
        user:{
            id:"2",
            name:"isaac"
        }
    }
]



export const categories = [
    {
        id:"1",
        name:"Fideos",
        recipes:[]
    },
    {
        id:"2",
        name:"Arroz",
        recipes:[]
    },
    {
        id:"3",
        name:"Carnes",
        recipes:[]
    }
]
