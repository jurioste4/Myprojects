cube(`PgStatioAllIndexes`, {
  sql: `SELECT * FROM pg_catalog.pg_statio_all_indexes`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [indexrelname, indexrelid, schemaname, relid, relname]
    }
  },
  
  dimensions: {
    indexrelname: {
      sql: `indexrelname`,
      type: `string`
    },
    
    indexrelid: {
      sql: `indexrelid`,
      type: `string`
    },
    
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
    }
  },
  
  dataSource: `default`
});
