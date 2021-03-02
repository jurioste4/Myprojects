cube(`PgSeclabels`, {
  sql: `SELECT * FROM pg_catalog.pg_seclabels`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [objname, provider, objoid, classoid, objnamespace]
    }
  },
  
  dimensions: {
    label: {
      sql: `label`,
      type: `string`
    },
    
    objname: {
      sql: `objname`,
      type: `string`
    },
    
    provider: {
      sql: `provider`,
      type: `string`
    },
    
    objtype: {
      sql: `objtype`,
      type: `string`
    },
    
    objoid: {
      sql: `objoid`,
      type: `string`
    },
    
    classoid: {
      sql: `classoid`,
      type: `string`
    },
    
    objnamespace: {
      sql: `objnamespace`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
