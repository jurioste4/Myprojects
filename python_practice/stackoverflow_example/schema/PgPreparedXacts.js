cube(`PgPreparedXacts`, {
  sql: `SELECT * FROM pg_catalog.pg_prepared_xacts`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [gid]
    }
  },
  
  dimensions: {
    owner: {
      sql: `owner`,
      type: `string`
    },
    
    transaction: {
      sql: `transaction`,
      type: `string`
    },
    
    database: {
      sql: `database`,
      type: `string`
    },
    
    gid: {
      sql: `gid`,
      type: `string`
    },
    
    prepared: {
      sql: `prepared`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
