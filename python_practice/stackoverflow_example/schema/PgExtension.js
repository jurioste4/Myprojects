cube(`PgExtension`, {
  sql: `SELECT * FROM pg_catalog.pg_extension`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [extname, extnamespace, oid]
    }
  },
  
  dimensions: {
    extversion: {
      sql: `extversion`,
      type: `string`
    },
    
    extcondition: {
      sql: `extcondition`,
      type: `string`
    },
    
    extconfig: {
      sql: `extconfig`,
      type: `string`
    },
    
    extname: {
      sql: `extname`,
      type: `string`
    },
    
    extrelocatable: {
      sql: `extrelocatable`,
      type: `string`
    },
    
    extowner: {
      sql: `extowner`,
      type: `string`
    },
    
    extnamespace: {
      sql: `extnamespace`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
