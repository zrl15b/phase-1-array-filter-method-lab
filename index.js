// Code your solution here

  
      function findMatching(arr, query) {
        return arr.filter(function(item) {
          return item.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
      }

      function fuzzyMatch(arr, query) {
        return arr.filter(function(item) { 
            if (item.toLowerCase().startsWith( query.toLowerCase())) { 
          return item.toLowerCase().indexOf(query.toLowerCase()) !== -1
         }
          })
      }

     
      function matchName(arr, query) {
        return arr.filter(function(item) {
          return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
      }