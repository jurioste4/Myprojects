cube(`PgStatsExt`, {
  sql: `SELECT * FROM pg_catalog.pg_stats_ext`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [attnames, tablename, schemaname, statisticsName, statisticsSchemaname]
    }
  },
  
  dimensions: {
    mostCommonVals: {
      sql: `most_common_vals`,
      type: `string`
    },
    
    mostCommonFreqs: {
      sql: `most_common_freqs`,
      type: `string`
    },
    
    nDistinct: {
      sql: `n_distinct`,
      type: `string`
    },
    
    attnames: {
      sql: `attnames`,
      type: `string`
    },
    
    mostCommonBaseFreqs: {
      sql: `most_common_base_freqs`,
      type: `string`
    },
    
    kinds: {
      sql: `kinds`,
      type: `string`
    },
    
    statisticsOwner: {
      sql: `statistics_owner`,
      type: `string`
    },
    
    tablename: {
      sql: `tablename`,
      type: `string`
    },
    
    mostCommonValNulls: {
      sql: `most_common_val_nulls`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    statisticsName: {
      sql: `statistics_name`,
      type: `string`
    },
    
    dependencies: {
      sql: `dependencies`,
      type: `string`
    },
    
    statisticsSchemaname: {
      sql: `statistics_schemaname`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
