

# recipe_challenge

It's a challenge recipe from puzzle from graphQL and other tecnologies


Starting 🚀

NPM Scripts

## npm run build -------- run tsc
## npm start ---- compile ts to js



See Deployment to know how the project.
## https://recipechallengepuzzle.herokuapp.com/graphql 




Pre requirements📋

## node
## mysql


Instalation 🔧

## npm i ---- install node_modules
## npm run build ---- buid proyect
## npm start ---- start to project


Entities


USER{
  ID
  Name
  Email
  Password
}


Recipe{
  ID
  Name
  Description
  Ingredients
  CategoryId
  userId 
}

CATEGORY{
  ID
Name
}

## Usage playground graphql 

Queries:
	getRecipes ,
	getOneRecipe ,
 	getCategories ,
	getOneCategory ,
	getMyRecipes ,

Mutations:
	createRecipe ,
	createCategory ,
	updateRecipe ,
	updateCategory ,
	deleteRecipe ,
	deleteCategory ,
	signUp ,
	login ,


## http header

After registering and logging in you will receive a token for inquiries

usage---
{
  "authorization" = "Bearer your-app-token"
}




## Build to 🛠️

**NodeJs
G**raphql
**TypeOrm
**Apollo
**Typescript
**JWT
**MySql


## Author ✒️

Figueroa Isaac

## Aplication Structure




├── dist                     # Distribution folder
├── node_modules             # Modules node
├                                         
├── src                      # Static public assets and uploads
│   ├── Entities             # Entities database
│   ├── helper               # Helper code
│   └── lib                  # GraphQL server
│       ├── resolvers        # Resolver GraphQL 
│       ├── store            # Store
│       └── typeDefs         # typeDefs GraphQL
│               
├── server                   # Server application start point
├── ormconfig                # Config typeOrm 
│── tsconfig                 # Config Typescript compile

