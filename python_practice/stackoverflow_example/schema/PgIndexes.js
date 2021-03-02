cube(`PgIndexes`, {
  sql: `SELECT * FROM pg_catalog.pg_indexes`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [schemaname, indexname, tablename]
    }
  },
  
  dimensions: {
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    tablespace: {
      sql: `tablespace`,
      type: `string`
    },
    
    indexname: {
      sql: `indexname`,
      type: `string`
    },
    
    tablename: {
      sql: `tablename`,
      type: `string`
    },
    
    indexdef: {
      sql: `indexdef`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
