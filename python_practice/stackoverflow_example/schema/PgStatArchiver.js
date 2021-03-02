cube(`PgStatArchiver`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_archiver`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    },
    
    failedCount: {
      sql: `failed_count`,
      type: `sum`
    },
    
    archivedCount: {
      sql: `archived_count`,
      type: `sum`
    }
  },
  
  dimensions: {
    lastFailedWal: {
      sql: `last_failed_wal`,
      type: `string`
    },
    
    lastArchivedWal: {
      sql: `last_archived_wal`,
      type: `string`
    },
    
    lastArchivedTime: {
      sql: `last_archived_time`,
      type: `time`
    },
    
    statsReset: {
      sql: `stats_reset`,
      type: `time`
    },
    
    lastFailedTime: {
      sql: `last_failed_time`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
