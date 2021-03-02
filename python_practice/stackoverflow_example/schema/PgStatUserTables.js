cube(`PgStatUserTables`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_user_tables`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [schemaname, relid, relname]
    },
    
    analyzeCount: {
      sql: `analyze_count`,
      type: `sum`
    },
    
    autovacuumCount: {
      sql: `autovacuum_count`,
      type: `sum`
    },
    
    vacuumCount: {
      sql: `vacuum_count`,
      type: `sum`
    },
    
    autoanalyzeCount: {
      sql: `autoanalyze_count`,
      type: `sum`
    }
  },
  
  dimensions: {
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    relid: {
      sql: `relid`,
      type: `string`
    },
    
    relname: {
      sql: `relname`,
      type: `string`
    },
    
    lastAutoanalyze: {
      sql: `last_autoanalyze`,
      type: `time`
    },
    
    lastVacuum: {
      sql: `last_vacuum`,
      type: `time`
    },
    
    lastAnalyze: {
      sql: `last_analyze`,
      type: `time`
    },
    
    lastAutovacuum: {
      sql: `last_autovacuum`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
