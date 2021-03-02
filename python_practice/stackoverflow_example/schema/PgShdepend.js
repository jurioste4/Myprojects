cube(`PgShdepend`, {
  sql: `SELECT * FROM pg_catalog.pg_shdepend`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [dbid, objid, classid, refclassid, refobjid]
    }
  },
  
  dimensions: {
    dbid: {
      sql: `dbid`,
      type: `string`
    },
    
    objid: {
      sql: `objid`,
      type: `string`
    },
    
    classid: {
      sql: `classid`,
      type: `string`
    },
    
    refclassid: {
      sql: `refclassid`,
      type: `string`
    },
    
    refobjid: {
      sql: `refobjid`,
      type: `string`
    },
    
    deptype: {
      sql: `deptype`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
