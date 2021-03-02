cube(`PgRange`, {
  sql: `SELECT * FROM pg_catalog.pg_range`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [rngtypid]
    }
  },
  
  dimensions: {
    rngsubdiff: {
      sql: `rngsubdiff`,
      type: `string`
    },
    
    rngcanonical: {
      sql: `rngcanonical`,
      type: `string`
    },
    
    rngsubtype: {
      sql: `rngsubtype`,
      type: `string`
    },
    
    rngcollation: {
      sql: `rngcollation`,
      type: `string`
    },
    
    rngtypid: {
      sql: `rngtypid`,
      type: `string`
    },
    
    rngsubopc: {
      sql: `rngsubopc`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
