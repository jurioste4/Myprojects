cube(`PgStatisticExt`, {
  sql: `SELECT * FROM pg_catalog.pg_statistic_ext`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [stxrelid, stxname, oid, stxnamespace]
    }
  },
  
  dimensions: {
    stxkeys: {
      sql: `stxkeys`,
      type: `string`
    },
    
    stxkind: {
      sql: `stxkind`,
      type: `string`
    },
    
    stxrelid: {
      sql: `stxrelid`,
      type: `string`
    },
    
    stxowner: {
      sql: `stxowner`,
      type: `string`
    },
    
    stxname: {
      sql: `stxname`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    stxnamespace: {
      sql: `stxnamespace`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
