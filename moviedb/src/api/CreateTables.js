const oracledb = require('oracledb');

async function run() {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: 'dcpatel',
      password: '06210050',
      connectString: 'dcpatel/06210050@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=oracle.scs.ryerson.ca)(Port=1521))(CONNECT_DATA=(SID=orcl)))',
    });

<<<<<<< HEAD:moviedb/src/api/index.js
=======
    const result = await connection.execute('SELECT * FROM your_table');
    res.status(200).json(result.rows);

>>>>>>> 41e79ddfb2902518544b1967936dd74c71a5b449:moviedb/src/api/CreateTables.js
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
