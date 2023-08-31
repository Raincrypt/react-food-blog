// Cleaning the data to remove unused object properties.
const cleanUpCarouselSlides = (rawData) => {
    const cleanSlides = rawData.map((slide) => {
      const {sys, fields} = slide;
      const {id} = sys;
      const slideTitle = fields.title;
      const slideDescription = fields.description;
      const slideBg = fields.image.fields.file.url;
      const updatedSlide = {id, slideTitle, slideDescription, slideBg};
      return updatedSlide;
    })
    return cleanSlides;
}

const cleanUpAbout = (rawData) => {
    const data = rawData[0];
    const {fields} = data;
    const {title, content} = fields;
    const aboutImage = fields.image.fields.file.url;

    let updatedAbout = {title, content, aboutImage}
    return updatedAbout
}

const cleanUpCategories = (rawData) => {
    const cleanCategories = rawData.map((category) => {
        const {sys, fields} = category;
        const {id} = sys;
        const categoryTitle = fields.title;
        const categoryImage = fields.image.fields.file.url;
        const updatedCategory = {id, categoryTitle, categoryImage};
        return updatedCategory;
      })
      return cleanCategories;
}

const cleanUpRecipies = (rawData) => {
    const cleanRecipies = rawData.map((recipe) => {
        const {sys, fields} = recipe;
        const {id} = sys;

        const {date} = fields;
        
        const recipeTitle = fields.title;
        const recipeDescription = fields.description;
        const recipeImage = fields.image.fields.file.url;
        const updatedrecipe = {id, recipeTitle, recipeImage, recipeDescription, date};
        return updatedrecipe;
      })
      return cleanRecipies;
}

export {
    cleanUpAbout,
    cleanUpCarouselSlides,
    cleanUpCategories,
    cleanUpRecipies
}