cube(`PgStatProgressCreateIndex`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_progress_create_index`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [datid, datname, relid, indexRelid]
    },
    
    blocksTotal: {
      sql: `blocks_total`,
      type: `sum`
    },
    
    tuplesTotal: {
      sql: `tuples_total`,
      type: `sum`
    },
    
    lockersTotal: {
      sql: `lockers_total`,
      type: `sum`
    },
    
    partitionsTotal: {
      sql: `partitions_total`,
      type: `sum`
    }
  },
  
  dimensions: {
    datid: {
      sql: `datid`,
      type: `string`
    },
    
    datname: {
      sql: `datname`,
      type: `string`
    },
    
    relid: {
      sql: `relid`,
      type: `string`
    },
    
    indexRelid: {
      sql: `index_relid`,
      type: `string`
    },
    
    command: {
      sql: `command`,
      type: `string`
    },
    
    phase: {
      sql: `phase`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
