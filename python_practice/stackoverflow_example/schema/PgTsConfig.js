cube(`PgTsConfig`, {
  sql: `SELECT * FROM pg_catalog.pg_ts_config`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid, cfgnamespace, cfgname]
    }
  },
  
  dimensions: {
    cfgowner: {
      sql: `cfgowner`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    cfgnamespace: {
      sql: `cfgnamespace`,
      type: `string`
    },
    
    cfgparser: {
      sql: `cfgparser`,
      type: `string`
    },
    
    cfgname: {
      sql: `cfgname`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
