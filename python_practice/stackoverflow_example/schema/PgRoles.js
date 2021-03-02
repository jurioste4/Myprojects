cube(`PgRoles`, {
  sql: `SELECT * FROM pg_catalog.pg_roles`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid, rolcreatedb, rolname, rolvaliduntil]
    }
  },
  
  dimensions: {
    rolbypassrls: {
      sql: `rolbypassrls`,
      type: `string`
    },
    
    rolcanlogin: {
      sql: `rolcanlogin`,
      type: `string`
    },
    
    rolreplication: {
      sql: `rolreplication`,
      type: `string`
    },
    
    rolconfig: {
      sql: `rolconfig`,
      type: `string`
    },
    
    rolsuper: {
      sql: `rolsuper`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    rolcreatedb: {
      sql: `rolcreatedb`,
      type: `string`
    },
    
    rolname: {
      sql: `rolname`,
      type: `string`
    },
    
    rolcreaterole: {
      sql: `rolcreaterole`,
      type: `string`
    },
    
    rolpassword: {
      sql: `rolpassword`,
      type: `string`
    },
    
    rolinherit: {
      sql: `rolinherit`,
      type: `string`
    },
    
    rolvaliduntil: {
      sql: `rolvaliduntil`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
