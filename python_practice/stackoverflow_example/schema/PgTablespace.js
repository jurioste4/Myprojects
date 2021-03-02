cube(`PgTablespace`, {
  sql: `SELECT * FROM pg_catalog.pg_tablespace`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [spcname, oid]
    }
  },
  
  dimensions: {
    spcname: {
      sql: `spcname`,
      type: `string`
    },
    
    spcoptions: {
      sql: `spcoptions`,
      type: `string`
    },
    
    spcacl: {
      sql: `spcacl`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    spcowner: {
      sql: `spcowner`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
