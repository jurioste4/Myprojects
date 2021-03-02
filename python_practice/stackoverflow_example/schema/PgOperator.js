cube(`PgOperator`, {
  sql: `SELECT * FROM pg_catalog.pg_operator`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oprname, oid, oprnamespace]
    }
  },
  
  dimensions: {
    oprname: {
      sql: `oprname`,
      type: `string`
    },
    
    oprnegate: {
      sql: `oprnegate`,
      type: `string`
    },
    
    oprright: {
      sql: `oprright`,
      type: `string`
    },
    
    oprowner: {
      sql: `oprowner`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    oprnamespace: {
      sql: `oprnamespace`,
      type: `string`
    },
    
    oprcom: {
      sql: `oprcom`,
      type: `string`
    },
    
    oprrest: {
      sql: `oprrest`,
      type: `string`
    },
    
    oprkind: {
      sql: `oprkind`,
      type: `string`
    },
    
    oprcode: {
      sql: `oprcode`,
      type: `string`
    },
    
    oprcanmerge: {
      sql: `oprcanmerge`,
      type: `string`
    },
    
    oprleft: {
      sql: `oprleft`,
      type: `string`
    },
    
    oprcanhash: {
      sql: `oprcanhash`,
      type: `string`
    },
    
    oprresult: {
      sql: `oprresult`,
      type: `string`
    },
    
    oprjoin: {
      sql: `oprjoin`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
