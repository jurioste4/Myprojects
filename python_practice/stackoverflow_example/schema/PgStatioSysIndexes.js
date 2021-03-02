cube(`PgStatioSysIndexes`, {
  sql: `SELECT * FROM pg_catalog.pg_statio_sys_indexes`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [indexrelname, indexrelid, schemaname, relname, relid]
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
