const oracledb = require('oracledb');

async function run() {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: 'dcpatel',
      password: '06210050',
      connectString: 'dcpatel/06210050@localhost:1521/orcl',
    });

    await connection.execute(" \
      DROP TABLE Actor CASCADE CONSTRAINTS; \
      DROP TABLE Director CASCADE CONSTRAINTS; \
      DROP TABLE Producer CASCADE CONSTRAINTS; \
      DROP TABLE TheUser CASCADE CONSTRAINTS; \
      DROP TABLE Studio CASCADE CONSTRAINTS; \
      DROP TABLE Receiver CASCADE CONSTRAINTS; \
      DROP TABLE Film CASCADE CONSTRAINTS; \
      DROP TABLE Review CASCADE CONSTRAINTS; \
      DROP TABLE Awards CASCADE CONSTRAINTS; \
      DROP TABLE Actor_Acts_In_Film CASCADE CONSTRAINTS; \
      DROP TABLE Director_Directs_Film CASCADE CONSTRAINTS; \
      DROP TABLE Producer_Produces_Film CASCADE CONSTRAINTS; \
      DROP TABLE Studio_Owns_Film CASCADE CONSTRAINTS; \
      DROP TABLE Awards_Given_To_Film CASCADE CONSTRAINTS; \
      DROP TABLE TheUser_Creates_Review CASCADE CONSTRAINTS; \
      DROP TABLE Review_Rates_Film CASCADE CONSTRAINTS; ");
    
    // res.status(200).json(result.rows);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();
