cube(`PgStatioUserTables`, {
  sql: `SELECT * FROM pg_catalog.pg_statio_user_tables`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [schemaname, relname, relid]
    }
  },
  
  dimensions: {
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
