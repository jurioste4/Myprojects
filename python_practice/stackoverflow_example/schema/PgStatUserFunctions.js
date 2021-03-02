cube(`PgStatUserFunctions`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_user_functions`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [schemaname, funcid, funcname]
    }
  },
  
  dimensions: {
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    funcid: {
      sql: `funcid`,
      type: `string`
    },
    
    funcname: {
      sql: `funcname`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
