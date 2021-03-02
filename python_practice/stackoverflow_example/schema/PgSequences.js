cube(`PgSequences`, {
  sql: `SELECT * FROM pg_catalog.pg_sequences`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [sequencename, schemaname]
    },
    
    startValue: {
      sql: `start_value`,
      type: `sum`
    },
    
    lastValue: {
      sql: `last_value`,
      type: `sum`
    },
    
    minValue: {
      sql: `min_value`,
      type: `sum`
    },
    
    maxValue: {
      sql: `max_value`,
      type: `sum`
    }
  },
  
  dimensions: {
    cycle: {
      sql: `cycle`,
      type: `string`
    },
    
    sequencename: {
      sql: `sequencename`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    dataType: {
      sql: `data_type`,
      type: `string`
    },
    
    sequenceowner: {
      sql: `sequenceowner`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
