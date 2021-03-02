cube(`PgOpfamily`, {
  sql: `SELECT * FROM pg_catalog.pg_opfamily`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [opfname, opfnamespace, oid]
    }
  },
  
  dimensions: {
    opfname: {
      sql: `opfname`,
      type: `string`
    },
    
    opfnamespace: {
      sql: `opfnamespace`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    opfmethod: {
      sql: `opfmethod`,
      type: `string`
    },
    
    opfowner: {
      sql: `opfowner`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
