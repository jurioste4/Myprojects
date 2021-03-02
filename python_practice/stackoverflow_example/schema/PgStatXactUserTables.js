cube(`PgStatXactUserTables`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_xact_user_tables`,
  
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
