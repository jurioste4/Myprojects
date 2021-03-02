cube(`PgStatProgressVacuum`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_progress_vacuum`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [datname, datid, relid]
    },
    
    indexVacuumCount: {
      sql: `index_vacuum_count`,
      type: `sum`
    },
    
    heapBlksTotal: {
      sql: `heap_blks_total`,
      type: `sum`
    }
  },
  
  dimensions: {
    phase: {
      sql: `phase`,
      type: `string`
    },
    
    datname: {
      sql: `datname`,
      type: `string`
    },
    
    datid: {
      sql: `datid`,
      type: `string`
    },
    
    relid: {
      sql: `relid`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
