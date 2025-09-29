require("dotenv").config();
const db = require("../backend/src/models");

async function createDatabaseTables() {
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");
  process.exit();
}

createDatabaseTables();
