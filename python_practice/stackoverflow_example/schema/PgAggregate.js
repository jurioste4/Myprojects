cube(`PgAggregate`, {
  sql: `SELECT * FROM pg_catalog.pg_aggregate`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [aggfnoid]
    }
  },
  
  dimensions: {
    aggmfinalfn: {
      sql: `aggmfinalfn`,
      type: `string`
    },
    
    aggfinalextra: {
      sql: `aggfinalextra`,
      type: `string`
    },
    
    aggtransfn: {
      sql: `aggtransfn`,
      type: `string`
    },
    
    aggsortop: {
      sql: `aggsortop`,
      type: `string`
    },
    
    aggmtransfn: {
      sql: `aggmtransfn`,
      type: `string`
    },
    
    aggminitval: {
      sql: `aggminitval`,
      type: `string`
    },
    
    aggfinalmodify: {
      sql: `aggfinalmodify`,
      type: `string`
    },
    
    aggfnoid: {
      sql: `aggfnoid`,
      type: `string`
    },
    
    aggkind: {
      sql: `aggkind`,
      type: `string`
    },
    
    aggfinalfn: {
      sql: `aggfinalfn`,
      type: `string`
    },
    
    aggmfinalextra: {
      sql: `aggmfinalextra`,
      type: `string`
    },
    
    aggmtranstype: {
      sql: `aggmtranstype`,
      type: `string`
    },
    
    aggdeserialfn: {
      sql: `aggdeserialfn`,
      type: `string`
    },
    
    aggcombinefn: {
      sql: `aggcombinefn`,
      type: `string`
    },
    
    aggserialfn: {
      sql: `aggserialfn`,
      type: `string`
    },
    
    aggminvtransfn: {
      sql: `aggminvtransfn`,
      type: `string`
    },
    
    aggtranstype: {
      sql: `aggtranstype`,
      type: `string`
    },
    
    agginitval: {
      sql: `agginitval`,
      type: `string`
    },
    
    aggmfinalmodify: {
      sql: `aggmfinalmodify`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
