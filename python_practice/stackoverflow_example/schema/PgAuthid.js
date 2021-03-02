cube(`PgAuthid`, {
  sql: `SELECT * FROM pg_catalog.pg_authid`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [rolname, oid, rolcreatedb, rolvaliduntil]
    }
  },
  
  dimensions: {
    rolname: {
      sql: `rolname`,
      type: `string`
    },
    
    rolinherit: {
      sql: `rolinherit`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    rolpassword: {
      sql: `rolpassword`,
      type: `string`
    },
    
    rolbypassrls: {
      sql: `rolbypassrls`,
      type: `string`
    },
    
    rolsuper: {
      sql: `rolsuper`,
      type: `string`
    },
    
    rolcreaterole: {
      sql: `rolcreaterole`,
      type: `string`
    },
    
    rolcreatedb: {
      sql: `rolcreatedb`,
      type: `string`
    },
    
    rolreplication: {
      sql: `rolreplication`,
      type: `string`
    },
    
    rolcanlogin: {
      sql: `rolcanlogin`,
      type: `string`
    },
    
    rolvaliduntil: {
      sql: `rolvaliduntil`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
