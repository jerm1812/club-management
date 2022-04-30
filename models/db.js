var sql = requre('sql');

sql.setDialect('mssql');
sql.name
var user = sql.define({
    name: 'user',
    columns: [
        'id', 
        'name'
    ]
})