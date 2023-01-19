import connection from "../database/db.js";

function getAuthorRepository() {
  const result = connection.query(
    `
     SELECT * FROM authors;
    `
  );
  return result;
}

function postAuthorRepository({
  name,
  idade,
}: {
  name: string;
  idade: number;
}) {
console.log(name)
  const result = connection.query(
    `
      INSERT INTO authors ( 
        name, 
        idade
      )
      VALUES ($1, $2)
    `,
    [name, idade]
  );

  return result;
}

export { getAuthorRepository, postAuthorRepository };
