cube(`PgLargeobject`, {
  sql: `SELECT * FROM pg_catalog.pg_largeobject`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [loid]
    }
  },
  
  dimensions: {
    data: {
      sql: `data`,
      type: `string`
    },
    
    loid: {
      sql: `loid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
