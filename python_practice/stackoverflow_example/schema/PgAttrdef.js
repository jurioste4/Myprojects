cube(`PgAttrdef`, {
  sql: `SELECT * FROM pg_catalog.pg_attrdef`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid, adrelid]
    }
  },
  
  dimensions: {
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    adbin: {
      sql: `adbin`,
      type: `string`
    },
    
    adrelid: {
      sql: `adrelid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
