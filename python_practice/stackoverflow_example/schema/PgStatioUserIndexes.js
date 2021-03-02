cube(`PgStatioUserIndexes`, {
  sql: `SELECT * FROM pg_catalog.pg_statio_user_indexes`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [schemaname, relid, relname, indexrelid, indexrelname]
    }
  },
  
  dimensions: {
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    relid: {
      sql: `relid`,
      type: `string`
    },
    
    relname: {
      sql: `relname`,
      type: `string`
    },
    
    indexrelid: {
      sql: `indexrelid`,
      type: `string`
    },
    
    indexrelname: {
      sql: `indexrelname`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
