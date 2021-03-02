cube(`PgStats`, {
  sql: `SELECT * FROM pg_catalog.pg_stats`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [tablename, schemaname, attname]
    }
  },
  
  dimensions: {
    tablename: {
      sql: `tablename`,
      type: `string`
    },
    
    histogramBounds: {
      sql: `histogram_bounds`,
      type: `string`
    },
    
    mostCommonVals: {
      sql: `most_common_vals`,
      type: `string`
    },
    
    nullFrac: {
      sql: `null_frac`,
      type: `string`
    },
    
    nDistinct: {
      sql: `n_distinct`,
      type: `string`
    },
    
    mostCommonElemFreqs: {
      sql: `most_common_elem_freqs`,
      type: `string`
    },
    
    correlation: {
      sql: `correlation`,
      type: `string`
    },
    
    mostCommonElems: {
      sql: `most_common_elems`,
      type: `string`
    },
    
    inherited: {
      sql: `inherited`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    elemCountHistogram: {
      sql: `elem_count_histogram`,
      type: `string`
    },
    
    attname: {
      sql: `attname`,
      type: `string`
    },
    
    mostCommonFreqs: {
      sql: `most_common_freqs`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
