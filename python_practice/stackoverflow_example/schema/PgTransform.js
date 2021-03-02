cube(`PgTransform`, {
  sql: `SELECT * FROM pg_catalog.pg_transform`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid]
    }
  },
  
  dimensions: {
    trftype: {
      sql: `trftype`,
      type: `string`
    },
    
    trftosql: {
      sql: `trftosql`,
      type: `string`
    },
    
    trflang: {
      sql: `trflang`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    trffromsql: {
      sql: `trffromsql`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
