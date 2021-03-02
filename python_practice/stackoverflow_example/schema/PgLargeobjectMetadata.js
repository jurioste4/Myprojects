cube(`PgLargeobjectMetadata`, {
  sql: `SELECT * FROM pg_catalog.pg_largeobject_metadata`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid]
    }
  },
  
  dimensions: {
    lomowner: {
      sql: `lomowner`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    lomacl: {
      sql: `lomacl`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
