cube(`PgDbRoleSetting`, {
  sql: `SELECT * FROM pg_catalog.pg_db_role_setting`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    setrole: {
      sql: `setrole`,
      type: `string`
    },
    
    setdatabase: {
      sql: `setdatabase`,
      type: `string`
    },
    
    setconfig: {
      sql: `setconfig`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
