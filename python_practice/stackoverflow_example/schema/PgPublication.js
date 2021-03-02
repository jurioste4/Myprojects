cube(`PgPublication`, {
  sql: `SELECT * FROM pg_catalog.pg_publication`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [pubupdate, pubname, oid]
    }
  },
  
  dimensions: {
    pubdelete: {
      sql: `pubdelete`,
      type: `string`
    },
    
    pubtruncate: {
      sql: `pubtruncate`,
      type: `string`
    },
    
    pubupdate: {
      sql: `pubupdate`,
      type: `string`
    },
    
    pubinsert: {
      sql: `pubinsert`,
      type: `string`
    },
    
    pubname: {
      sql: `pubname`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    puballtables: {
      sql: `puballtables`,
      type: `string`
    },
    
    pubowner: {
      sql: `pubowner`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
