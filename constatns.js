exports.users = [
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


exports.recipesConstatns = [
    {
        id:"1",
        name:"isaac",
        description:"descrito",
        ingredients:"todos",
        category:{
            id:1,
            name:"Arroz"
        } ,
        user:{
            id:"1",
        }
    },
    {
        id:"2",
        name:"joana",
        description:"descrita",
        ingredients:"pocos",
        category:{
            id:2,
            name:"Fideos"
        } ,
        user:{
            id:"2",
        }
    },
    {
        id:"4",
        name:"joana",
        description:"descrita",
        ingredients:"muchos",
        category:{
            id:4,
            name:"Fideos"
        } ,
        user:{
            id:"2",
        }
    },
    {
        id:"3",
        name:"boby",
        description:"descrito",
        ingredients:"perro",
        category:{
            id:3,
            name:"Carnes"
        },
        user:{
            id:"3",
        }
    }
]



exports.Categories = [
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