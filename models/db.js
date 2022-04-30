var sql = requre('sql');

sql.setDialect('mssql');
sql.name
var user = sql.define({
    name: 'user',
    columns: [
        'user_id', 
        'username',
        'user_pw',
        'email',
        'role_id',
        'group_id'
    ]
})

var user = sql.define({
    name: 'role',
    columns: [
        'role_id',
        'role_name'
    ]
})

var user = sql.define({
    name: 'group', 
    columns: [
        'group_id',
        'group_name'
    ]
})