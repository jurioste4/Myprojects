cube(`PgPublicationRel`, {
  sql: `SELECT * FROM pg_catalog.pg_publication_rel`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid, prrelid, prpubid]
    }
  },
  
  dimensions: {
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    prrelid: {
      sql: `prrelid`,
      type: `string`
    },
    
    prpubid: {
      sql: `prpubid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
