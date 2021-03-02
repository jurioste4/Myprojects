cube(`PgAm`, {
  sql: `SELECT * FROM pg_catalog.pg_am`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [amname, oid]
    }
  },
  
  dimensions: {
    amname: {
      sql: `amname`,
      type: `string`
    },
    
    amtype: {
      sql: `amtype`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    amhandler: {
      sql: `amhandler`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
