cube(`PgAmop`, {
  sql: `SELECT * FROM pg_catalog.pg_amop`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid]
    }
  },
  
  dimensions: {
    amopmethod: {
      sql: `amopmethod`,
      type: `string`
    },
    
    amoppurpose: {
      sql: `amoppurpose`,
      type: `string`
    },
    
    amopopr: {
      sql: `amopopr`,
      type: `string`
    },
    
    amopfamily: {
      sql: `amopfamily`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    amoprighttype: {
      sql: `amoprighttype`,
      type: `string`
    },
    
    amopsortfamily: {
      sql: `amopsortfamily`,
      type: `string`
    },
    
    amoplefttype: {
      sql: `amoplefttype`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
