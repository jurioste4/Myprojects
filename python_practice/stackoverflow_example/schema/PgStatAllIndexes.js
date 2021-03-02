cube(`PgStatAllIndexes`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_all_indexes`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [indexrelid, indexrelname, schemaname, relname, relid]
    }
  },
  
  dimensions: {
    indexrelid: {
      sql: `indexrelid`,
      type: `string`
    },
    
    indexrelname: {
      sql: `indexrelname`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    relname: {
      sql: `relname`,
      type: `string`
    },
    
    relid: {
      sql: `relid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
