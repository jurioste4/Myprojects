cube(`PgIndex`, {
  sql: `SELECT * FROM pg_catalog.pg_index`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [indexrelid, indrelid, indisreplident, indisvalid]
    }
  },
  
  dimensions: {
    indexrelid: {
      sql: `indexrelid`,
      type: `string`
    },
    
    indexprs: {
      sql: `indexprs`,
      type: `string`
    },
    
    indpred: {
      sql: `indpred`,
      type: `string`
    },
    
    indoption: {
      sql: `indoption`,
      type: `string`
    },
    
    indisunique: {
      sql: `indisunique`,
      type: `string`
    },
    
    indisready: {
      sql: `indisready`,
      type: `string`
    },
    
    indislive: {
      sql: `indislive`,
      type: `string`
    },
    
    indrelid: {
      sql: `indrelid`,
      type: `string`
    },
    
    indcheckxmin: {
      sql: `indcheckxmin`,
      type: `string`
    },
    
    indcollation: {
      sql: `indcollation`,
      type: `string`
    },
    
    indisclustered: {
      sql: `indisclustered`,
      type: `string`
    },
    
    indisreplident: {
      sql: `indisreplident`,
      type: `string`
    },
    
    indkey: {
      sql: `indkey`,
      type: `string`
    },
    
    indisvalid: {
      sql: `indisvalid`,
      type: `string`
    },
    
    indclass: {
      sql: `indclass`,
      type: `string`
    },
    
    indisexclusion: {
      sql: `indisexclusion`,
      type: `string`
    },
    
    indimmediate: {
      sql: `indimmediate`,
      type: `string`
    },
    
    indisprimary: {
      sql: `indisprimary`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
