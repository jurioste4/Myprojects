cube(`PgStatDatabase`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_database`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [datid, datname]
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
    
    statsReset: {
      sql: `stats_reset`,
      type: `time`
    },
    
    checksumLastFailure: {
      sql: `checksum_last_failure`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
