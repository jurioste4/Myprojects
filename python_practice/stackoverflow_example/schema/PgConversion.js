cube(`PgConversion`, {
  sql: `SELECT * FROM pg_catalog.pg_conversion`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [conname, connamespace, oid]
    }
  },
  
  dimensions: {
    condefault: {
      sql: `condefault`,
      type: `string`
    },
    
    conproc: {
      sql: `conproc`,
      type: `string`
    },
    
    conname: {
      sql: `conname`,
      type: `string`
    },
    
    connamespace: {
      sql: `connamespace`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    conowner: {
      sql: `conowner`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
