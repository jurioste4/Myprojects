cube(`PgTsTemplate`, {
  sql: `SELECT * FROM pg_catalog.pg_ts_template`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [tmplnamespace, oid, tmplname]
    }
  },
  
  dimensions: {
    tmplnamespace: {
      sql: `tmplnamespace`,
      type: `string`
    },
    
    tmplinit: {
      sql: `tmplinit`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    tmplname: {
      sql: `tmplname`,
      type: `string`
    },
    
    tmpllexize: {
      sql: `tmpllexize`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
