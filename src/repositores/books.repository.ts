import connection from "../database/db.js";

function getBooksRepository() {
  const result = connection.query(
    `
     SELECT * FROM books;
    `
  );
  return result;
}

function idBooksRepository({id}:{id:string}) {
  const result = connection.query(
    `
     SELECT * FROM books where id =${id};
    `
  );
  return result;
}


function postBooksRepository({
  name,
  description,
  classification,
  authorId,
}: {
  name: string;
  description: string;
  classification: number;
  authorId: number;
}) {
  const result = connection.query(
    `
      INSERT INTO books ( 
        name, 
        description, 
        classification, 
        "authorId" 
      )
      VALUES ($1, $2, $3, $4)
    `,
    [name, description, classification, authorId]
  );

  return result;
}

function updateBooksRepository({
  name,
  description,
  classification,
  authorId,
  bookId,
}: {
  name: string;
  description: string;
  classification: number;
  authorId: number;
  bookId: number;
}) {
  const result = connection.query(
    `
      UPDATE books 
      SET name = $1, description = $2, classification = $3, "authorId" = $4
      WHERE id = $5;
    `,
    [name, description, classification, authorId, bookId]
  );

  return result;
}

function deleteBooksRepository({ bookId }: { bookId: number }) {
  const result = connection.query(
    `
      DELETE FROM books where id = ${bookId};
    `
  );
  return result;
}
function allBooksRepository({fil}:{fil:string}) {
  const result = connection.query(
    `
      SELECT  
        books.id,books.name,
        books.description,
        books.classification, 
        authors.name as "author"
      FROM books
      inner JOIN authors
      ON books."authorId" = authors.id
      where books.classification > ${fil}
      order by books.classification desc;
    `
  );
  return result;
}

export {
  getBooksRepository,
  postBooksRepository,
  updateBooksRepository,
  deleteBooksRepository,
  allBooksRepository,
  idBooksRepository
};
