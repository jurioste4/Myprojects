cube(`PgForeignDataWrapper`, {
  sql: `SELECT * FROM pg_catalog.pg_foreign_data_wrapper`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [fdwname, fdwvalidator, oid]
    }
  },
  
  dimensions: {
    fdwacl: {
      sql: `fdwacl`,
      type: `string`
    },
    
    fdwoptions: {
      sql: `fdwoptions`,
      type: `string`
    },
    
    fdwname: {
      sql: `fdwname`,
      type: `string`
    },
    
    fdwvalidator: {
      sql: `fdwvalidator`,
      type: `string`
    },
    
    fdwowner: {
      sql: `fdwowner`,
      type: `string`
    },
    
    fdwhandler: {
      sql: `fdwhandler`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
