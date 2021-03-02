cube(`PgTsConfigMap`, {
  sql: `SELECT * FROM pg_catalog.pg_ts_config_map`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    mapdict: {
      sql: `mapdict`,
      type: `string`
    },
    
    mapcfg: {
      sql: `mapcfg`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
