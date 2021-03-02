cube(`PgStatGssapi`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_gssapi`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    encrypted: {
      sql: `encrypted`,
      type: `string`
    },
    
    principal: {
      sql: `principal`,
      type: `string`
    },
    
    gssAuthenticated: {
      sql: `gss_authenticated`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
