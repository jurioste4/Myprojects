cube(`PgSeclabel`, {
  sql: `SELECT * FROM pg_catalog.pg_seclabel`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [classoid, objoid, provider]
    }
  },
  
  dimensions: {
    classoid: {
      sql: `classoid`,
      type: `string`
    },
    
    label: {
      sql: `label`,
      type: `string`
    },
    
    objoid: {
      sql: `objoid`,
      type: `string`
    },
    
    provider: {
      sql: `provider`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
