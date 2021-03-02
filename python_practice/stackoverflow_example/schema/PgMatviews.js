cube(`PgMatviews`, {
  sql: `SELECT * FROM pg_catalog.pg_matviews`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [matviewname, schemaname]
    }
  },
  
  dimensions: {
    ispopulated: {
      sql: `ispopulated`,
      type: `string`
    },
    
    definition: {
      sql: `definition`,
      type: `string`
    },
    
    matviewname: {
      sql: `matviewname`,
      type: `string`
    },
    
    hasindexes: {
      sql: `hasindexes`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    tablespace: {
      sql: `tablespace`,
      type: `string`
    },
    
    matviewowner: {
      sql: `matviewowner`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
