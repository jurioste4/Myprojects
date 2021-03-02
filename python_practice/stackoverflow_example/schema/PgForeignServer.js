cube(`PgForeignServer`, {
  sql: `SELECT * FROM pg_catalog.pg_foreign_server`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid, srvname]
    }
  },
  
  dimensions: {
    srvacl: {
      sql: `srvacl`,
      type: `string`
    },
    
    srvoptions: {
      sql: `srvoptions`,
      type: `string`
    },
    
    srvversion: {
      sql: `srvversion`,
      type: `string`
    },
    
    srvfdw: {
      sql: `srvfdw`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    srvowner: {
      sql: `srvowner`,
      type: `string`
    },
    
    srvtype: {
      sql: `srvtype`,
      type: `string`
    },
    
    srvname: {
      sql: `srvname`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
