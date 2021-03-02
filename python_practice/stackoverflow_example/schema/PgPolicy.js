cube(`PgPolicy`, {
  sql: `SELECT * FROM pg_catalog.pg_policy`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [polname, polrelid, oid]
    }
  },
  
  dimensions: {
    polpermissive: {
      sql: `polpermissive`,
      type: `string`
    },
    
    polname: {
      sql: `polname`,
      type: `string`
    },
    
    polrelid: {
      sql: `polrelid`,
      type: `string`
    },
    
    polcmd: {
      sql: `polcmd`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    polqual: {
      sql: `polqual`,
      type: `string`
    },
    
    polroles: {
      sql: `polroles`,
      type: `string`
    },
    
    polwithcheck: {
      sql: `polwithcheck`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
