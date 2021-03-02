cube(`PgStatSysIndexes`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_sys_indexes`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [indexrelname, indexrelid, relname, relid, schemaname]
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
    
    relname: {
      sql: `relname`,
      type: `string`
    },
    
    relid: {
      sql: `relid`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
