cube(`PgPublicationTables`, {
  sql: `SELECT * FROM pg_catalog.pg_publication_tables`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [tablename, pubname, schemaname]
    }
  },
  
  dimensions: {
    tablename: {
      sql: `tablename`,
      type: `string`
    },
    
    pubname: {
      sql: `pubname`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
