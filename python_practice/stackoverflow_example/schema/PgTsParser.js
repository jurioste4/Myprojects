cube(`PgTsParser`, {
  sql: `SELECT * FROM pg_catalog.pg_ts_parser`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [prsnamespace, oid, prsname]
    }
  },
  
  dimensions: {
    prsnamespace: {
      sql: `prsnamespace`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    prsstart: {
      sql: `prsstart`,
      type: `string`
    },
    
    prsname: {
      sql: `prsname`,
      type: `string`
    },
    
    prstoken: {
      sql: `prstoken`,
      type: `string`
    },
    
    prsend: {
      sql: `prsend`,
      type: `string`
    },
    
    prslextype: {
      sql: `prslextype`,
      type: `string`
    },
    
    prsheadline: {
      sql: `prsheadline`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
