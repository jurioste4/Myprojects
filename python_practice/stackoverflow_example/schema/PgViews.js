cube(`PgViews`, {
  sql: `SELECT * FROM pg_catalog.pg_views`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [viewname, schemaname]
    }
  },
  
  dimensions: {
    viewname: {
      sql: `viewname`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    definition: {
      sql: `definition`,
      type: `string`
    },
    
    viewowner: {
      sql: `viewowner`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
