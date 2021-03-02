cube(`PgUserMapping`, {
  sql: `SELECT * FROM pg_catalog.pg_user_mapping`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oid]
    }
  },
  
  dimensions: {
    umuser: {
      sql: `umuser`,
      type: `string`
    },
    
    umoptions: {
      sql: `umoptions`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    umserver: {
      sql: `umserver`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
