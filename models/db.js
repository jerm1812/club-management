var sql = requre('sql');

sql.setDialect('mssql');

var user = sql.define({
    name: 'user',
    columns: [
        'id', 
        'name'
    ]
})