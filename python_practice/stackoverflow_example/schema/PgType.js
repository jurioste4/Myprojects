cube(`PgType`, {
  sql: `SELECT * FROM pg_catalog.pg_type`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [typnamespace, typrelid, typname, oid]
    }
  },
  
  dimensions: {
    typispreferred: {
      sql: `typispreferred`,
      type: `string`
    },
    
    typnamespace: {
      sql: `typnamespace`,
      type: `string`
    },
    
    typmodin: {
      sql: `typmodin`,
      type: `string`
    },
    
    typmodout: {
      sql: `typmodout`,
      type: `string`
    },
    
    typsend: {
      sql: `typsend`,
      type: `string`
    },
    
    typelem: {
      sql: `typelem`,
      type: `string`
    },
    
    typrelid: {
      sql: `typrelid`,
      type: `string`
    },
    
    typname: {
      sql: `typname`,
      type: `string`
    },
    
    typdelim: {
      sql: `typdelim`,
      type: `string`
    },
    
    typacl: {
      sql: `typacl`,
      type: `string`
    },
    
    typalign: {
      sql: `typalign`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    typoutput: {
      sql: `typoutput`,
      type: `string`
    },
    
    typowner: {
      sql: `typowner`,
      type: `string`
    },
    
    typarray: {
      sql: `typarray`,
      type: `string`
    },
    
    typanalyze: {
      sql: `typanalyze`,
      type: `string`
    },
    
    typinput: {
      sql: `typinput`,
      type: `string`
    },
    
    typnotnull: {
      sql: `typnotnull`,
      type: `string`
    },
    
    typbasetype: {
      sql: `typbasetype`,
      type: `string`
    },
    
    typisdefined: {
      sql: `typisdefined`,
      type: `string`
    },
    
    typreceive: {
      sql: `typreceive`,
      type: `string`
    },
    
    typstorage: {
      sql: `typstorage`,
      type: `string`
    },
    
    typtype: {
      sql: `typtype`,
      type: `string`
    },
    
    typcategory: {
      sql: `typcategory`,
      type: `string`
    },
    
    typdefault: {
      sql: `typdefault`,
      type: `string`
    },
    
    typcollation: {
      sql: `typcollation`,
      type: `string`
    },
    
    typdefaultbin: {
      sql: `typdefaultbin`,
      type: `string`
    },
    
    typbyval: {
      sql: `typbyval`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
