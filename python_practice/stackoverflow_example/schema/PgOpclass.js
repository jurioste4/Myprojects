cube(`PgOpclass`, {
  sql: `SELECT * FROM pg_catalog.pg_opclass`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [opcname, opcnamespace, oid]
    }
  },
  
  dimensions: {
    opcfamily: {
      sql: `opcfamily`,
      type: `string`
    },
    
    opcdefault: {
      sql: `opcdefault`,
      type: `string`
    },
    
    opcintype: {
      sql: `opcintype`,
      type: `string`
    },
    
    opcmethod: {
      sql: `opcmethod`,
      type: `string`
    },
    
    opcowner: {
      sql: `opcowner`,
      type: `string`
    },
    
    opcname: {
      sql: `opcname`,
      type: `string`
    },
    
    opckeytype: {
      sql: `opckeytype`,
      type: `string`
    },
    
    opcnamespace: {
      sql: `opcnamespace`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
