function userId({id}) {
    return id;
  }
  
  function whois({displayName, fullName: {firstName: name}}) {
    console.log(displayName + ' is ' + name);
  }
  
  var user = { 
    id: 42, 
    displayName: 'jdoe',
    fullName: { 
        firstName: 'John',
        lastName: 'Doe'
    }
  };
  
  console.log('userId: ' + userId(user)); // "userId: 42"
  whois(user); // "jdoe is John"