import connection from "../database/db.js";

function getCategoriesRepository() {
  const queryExemple = connection.query(
    `
     SELECT * FROM categories 
     order by name
     ;
    `
  );
  return queryExemple;
}

function postCategoriesRepository({
  name,
}: {
  name: string;
}) {
  const result = connection.query(
    `
      INSERT INTO categories ( 
        name
      )
      VALUES ($1)
    `,
    [name]
  );

  return result;
}

function consultCategoriesRepository({name}:{name:string}) {
  const queryExemple = connection.query(
    `
      SELECT  FROM categories WHERE name ='${name}';     
 
    `
  );
  return queryExemple;
}

export { getCategoriesRepository, postCategoriesRepository, consultCategoriesRepository };
