cube(`PgStatUserIndexes`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_user_indexes`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [relid, relname, schemaname, indexrelname, indexrelid]
    }
  },
  
  dimensions: {
    relid: {
      sql: `relid`,
      type: `string`
    },
    
    relname: {
      sql: `relname`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    indexrelname: {
      sql: `indexrelname`,
      type: `string`
    },
    
    indexrelid: {
      sql: `indexrelid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
