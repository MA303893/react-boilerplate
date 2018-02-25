export const BOOKSELECTED = "BOOK_SELECTED"

export function selectBook(book) {
  console.log("A book has been selected: ", book.title)
  return{
    type: BOOKSELECTED,
    payload: book
  }
}