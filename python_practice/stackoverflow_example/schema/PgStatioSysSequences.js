cube(`PgStatioSysSequences`, {
  sql: `SELECT * FROM pg_catalog.pg_statio_sys_sequences`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [relname, relid, schemaname]
    }
  },
  
  dimensions: {
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
