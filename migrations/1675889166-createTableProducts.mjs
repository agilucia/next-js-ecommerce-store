export async function up(sql) {
  await sql`
    CREATE TABLE products (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(30) NOT NULL,
      type varchar(30) NOT NULL,
      price varchar(30) NOT NULL,
      description varchar(300)
)
`;
}

export async function down(sql) {
  await sql`
    DROP TABLE products
  `;
}
