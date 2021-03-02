cube(`PgNamespace`, {
  sql: `SELECT * FROM pg_catalog.pg_namespace`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [nspname, oid]
    }
  },
  
  dimensions: {
    nspname: {
      sql: `nspname`,
      type: `string`
    },
    
    nspowner: {
      sql: `nspowner`,
      type: `string`
    },
    
    nspacl: {
      sql: `nspacl`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
