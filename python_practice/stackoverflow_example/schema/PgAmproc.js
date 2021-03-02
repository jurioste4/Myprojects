cube(`PgAmproc`, {
  sql: `SELECT * FROM pg_catalog.pg_amproc`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid]
    }
  },
  
  dimensions: {
    amprocfamily: {
      sql: `amprocfamily`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    amprocrighttype: {
      sql: `amprocrighttype`,
      type: `string`
    },
    
    amproclefttype: {
      sql: `amproclefttype`,
      type: `string`
    },
    
    amproc: {
      sql: `amproc`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
