cube(`PgStatisticExtData`, {
  sql: `SELECT * FROM pg_catalog.pg_statistic_ext_data`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [stxoid]
    }
  },
  
  dimensions: {
    stxoid: {
      sql: `stxoid`,
      type: `string`
    },
    
    stxdmcv: {
      sql: `stxdmcv`,
      type: `string`
    },
    
    stxddependencies: {
      sql: `stxddependencies`,
      type: `string`
    },
    
    stxdndistinct: {
      sql: `stxdndistinct`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
