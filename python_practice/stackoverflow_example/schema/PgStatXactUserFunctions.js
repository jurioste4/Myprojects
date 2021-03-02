cube(`PgStatXactUserFunctions`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_xact_user_functions`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [funcid, funcname, schemaname]
    }
  },
  
  dimensions: {
    funcid: {
      sql: `funcid`,
      type: `string`
    },
    
    funcname: {
      sql: `funcname`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
