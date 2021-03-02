cube(`PgStatioAllSequences`, {
  sql: `SELECT * FROM pg_catalog.pg_statio_all_sequences`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [schemaname, relid, relname]
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
    }
  },
  
  dataSource: `default`
});
