cube(`PgDepend`, {
  sql: `SELECT * FROM pg_catalog.pg_depend`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [classid, refclassid, refobjid, objid]
    }
  },
  
  dimensions: {
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
    
    objid: {
      sql: `objid`,
      type: `string`
    },
    
    deptype: {
      sql: `deptype`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
