cube(`PgTsDict`, {
  sql: `SELECT * FROM pg_catalog.pg_ts_dict`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [dictname, dictnamespace, oid]
    }
  },
  
  dimensions: {
    dictinitoption: {
      sql: `dictinitoption`,
      type: `string`
    },
    
    dictname: {
      sql: `dictname`,
      type: `string`
    },
    
    dicttemplate: {
      sql: `dicttemplate`,
      type: `string`
    },
    
    dictnamespace: {
      sql: `dictnamespace`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    dictowner: {
      sql: `dictowner`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
