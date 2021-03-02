cube(`PgStatioUserSequences`, {
  sql: `SELECT * FROM pg_catalog.pg_statio_user_sequences`,
  
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
