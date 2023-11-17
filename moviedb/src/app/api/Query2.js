const oracledb = require('oracledb');

async function query2() {
  let connection;

  try {
    // oracledb.initOracleClient({ libDir: "C:/Users/pra_d/OneDrive/Desktop/Anmol/Ryerson/instantclient-basic-windows.x64-21.12.0.0.0dbru/instantclient_21_12" });
    // connection = await oracledb.getConnection({
    //   user: 'appancha',
    //   password: '11157696',
    //   connectString: '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=oracle.scs.ryerson.ca)(Port=1521))(CONNECT_DATA=(SID=orcl)))',
    // });

    oracledb.initOracleClient({ libDir: "d:/instantclient_21_12" });
    connection = await oracledb.getConnection({
      user: 'dcpatel',
      password: '06210050',
      connectString: '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=oracle.scs.ryerson.ca)(Port=1521))(CONNECT_DATA=(SID=orcl)))',
    });

    try {
      const systemTestQuery = await connection.execute('SELECT SYSDATE FROM DUAL');
      console.log(" ");

      console.log("Rows: ", systemTestQuery.rows);
      let query2 = await connection.execute('SELECT first_name, last_name FROM Actor');
      console.log("Query Result 2:", query2.rows);
      return query2.rows;
    } catch (err) {
      console.log(err);
    }
    //res.status(200).json(result.rows);
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

query2();

module.exports = query2;
