cube(`PgGroup`, {
  sql: `SELECT * FROM pg_catalog.pg_group`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [grosysid, groname]
    }
  },
  
  dimensions: {
    grosysid: {
      sql: `grosysid`,
      type: `string`
    },
    
    groname: {
      sql: `groname`,
      type: `string`
    },
    
    grolist: {
      sql: `grolist`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
