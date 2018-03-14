export function itemHasErrored(bool) {
  return {
    type: 'BOOKS_HAS_ERRORED',
    hasErrored: bool
  }
}

export function booksIsLoading(bool) {
  return {
    type: 'BOOKS_IS_LOADING',
    isLoading: bool
  };
}

export function booksFetchDataSuccess(books) {
  return {
    type: 'BOOKS_FETCH_DATA_SUCCESS',
    books
  };
}

export function addBookSuccess(book) {
  return {
    type: 'ADD_BOOK_SUCCESS',
    book
  };
}

export function booksFetchData(url) {
  return (dispatch) => {
    dispatch(booksIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(booksIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((books) => dispatch(booksFetchDataSuccess(books)))
      .catch(() => dispatch(itemHasErrored(true)));
  };
}

export function booksPostData(url, book) {
  return (dispatch) => {
    dispatch(booksIsLoading(true));

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(booksIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((book) => dispatch(addBookSuccess(book)))
      .catch(() => dispatch(itemHasErrored(true)));
  };
}

export const BOOKSELECTED = "BOOK_SELECTED"

export function selectBook(book) {
  console.log("A book has been selected: ", book.title)
  return {
    type: BOOKSELECTED,
    payload: book
  }
}