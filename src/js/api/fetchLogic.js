import axios from 'axios';

async function getCategoryList() {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category-list`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getTopBooks() {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/top-books`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getBooksOfCertainCategory(category) {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${category}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
async function getOneBookById(id) {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export {
  getCategoryList,
  getTopBooks,
  getBooksOfCertainCategory,
  getOneBookById,
};

