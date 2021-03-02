cube(`PgReplicationOrigin`, {
  sql: `SELECT * FROM pg_catalog.pg_replication_origin`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [roname, roident]
    }
  },
  
  dimensions: {
    roname: {
      sql: `roname`,
      type: `string`
    },
    
    roident: {
      sql: `roident`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
