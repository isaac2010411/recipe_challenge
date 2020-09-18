import { getRepository } from 'typeorm';
import { v4 } from 'uuid';
import { Category } from '../../entities/categoryEntity';
import { Recipe } from '../../entities/recipeEntity';

export const CategoryStore = {

  findAllCategories: async () => {
    let categories = await getRepository(Category)
      .find({ relations: ["recipes"] });
    return categories;
  },

  findCategoryByName: async (name: Category) => {
    try {
      let category = await getRepository(Category)
        .findOne(name, { relations: ["recipes"] })
      return category;

    } catch (error) {
      throw new Error("Categorycname not found ");
    }
  },
//find by id
  findCategoryById: async (id: Category) => {
    try {
      let category = await getRepository(Category)
        .findOne(id,
          { relations: ["recipes"] })
      return category;
    } catch (error) {
      throw new Error("Category not found");
    }
  },
  //find by id
  findRecipesByCategory: async (id: Category) => {
    try {
      let category = await getRepository(Category)
        .findOne(id, { relations: ["recipes"] })
      return category?.recipes;
    } catch (error) {
      throw new Error("Category not found");
    }
  },
//create new category
  createNewCategory: async (name: any) => {
    
    try {
       let category = await getRepository(Category)
        .findOne({name})
        
        if (!category) {
          category = new Category()
          category.id = v4()
          category.name = name
          await getRepository<Category>(Category)
            .save(category)
        }
      return category;
      
    } catch (error) {
      throw new Error("Error in AddCategory");
    }
  },
  //update Category name
  updateCategory: async (data: any ) => {
    
    const { input, id } = data;
      let isCategory = await getRepository(Category)
      .findOne({id})

        if (!isCategory) {
          throw new Error("Category not found");
        } 
        
      let isNameOk = await getRepository(Category)
      .findOne({name:input.name})

      if (isNameOk) {
        throw new Error("Name category is already in use");
      }

      let isCat = await getRepository(Category)
        .createQueryBuilder()
        .update(Category)
        .where("id = :id", { id })
        .set({
          name: input.name
        })
        .execute();
      
      if (isCat.affected) {
        let isCategory = await CategoryStore.findCategoryById(id);
        return isCategory;
      }
  } ,
  deleteCategory: async (id: any) => {
    try {
      let recipes = await getRepository(Recipe)
      .createQueryBuilder()
      .delete()
      .from(Recipe)
      .where("category.id = :id", { id})
      .execute();
  
      await getRepository(Category)
        .delete({ id })
     
      return true
    } catch (error) {
     throw new Error("Error to delete");
    }
  }
  
}
