cube(`PgLocks`, {
  sql: `SELECT * FROM pg_catalog.pg_locks`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [virtualxid, classid, transactionid, objid]
    }
  },
  
  dimensions: {
    virtualtransaction: {
      sql: `virtualtransaction`,
      type: `string`
    },
    
    virtualxid: {
      sql: `virtualxid`,
      type: `string`
    },
    
    classid: {
      sql: `classid`,
      type: `string`
    },
    
    transactionid: {
      sql: `transactionid`,
      type: `string`
    },
    
    fastpath: {
      sql: `fastpath`,
      type: `string`
    },
    
    database: {
      sql: `database`,
      type: `string`
    },
    
    mode: {
      sql: `mode`,
      type: `string`
    },
    
    objid: {
      sql: `objid`,
      type: `string`
    },
    
    granted: {
      sql: `granted`,
      type: `string`
    },
    
    relation: {
      sql: `relation`,
      type: `string`
    },
    
    locktype: {
      sql: `locktype`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
