cube(`PgPltemplate`, {
  sql: `SELECT * FROM pg_catalog.pg_pltemplate`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [tmplvalidator, tmplname]
    }
  },
  
  dimensions: {
    tmpllibrary: {
      sql: `tmpllibrary`,
      type: `string`
    },
    
    tmplacl: {
      sql: `tmplacl`,
      type: `string`
    },
    
    tmplvalidator: {
      sql: `tmplvalidator`,
      type: `string`
    },
    
    tmplname: {
      sql: `tmplname`,
      type: `string`
    },
    
    tmplhandler: {
      sql: `tmplhandler`,
      type: `string`
    },
    
    tmpldbacreate: {
      sql: `tmpldbacreate`,
      type: `string`
    },
    
    tmplinline: {
      sql: `tmplinline`,
      type: `string`
    },
    
    tmpltrusted: {
      sql: `tmpltrusted`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
