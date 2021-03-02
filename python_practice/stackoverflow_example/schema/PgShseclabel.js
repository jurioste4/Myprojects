cube(`PgShseclabel`, {
  sql: `SELECT * FROM pg_catalog.pg_shseclabel`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [objoid, provider, classoid]
    }
  },
  
  dimensions: {
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
    },
    
    classoid: {
      sql: `classoid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
