cube(`PgShdescription`, {
  sql: `SELECT * FROM pg_catalog.pg_shdescription`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [classoid, objoid]
    }
  },
  
  dimensions: {
    classoid: {
      sql: `classoid`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    objoid: {
      sql: `objoid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
