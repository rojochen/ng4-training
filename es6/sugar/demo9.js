function userId({id}) {
    return id;
}
//可在參數使用解構。取代多的宣告
function whois({displayName, fullName: {firstName: name}}) {
  console.log(displayName + ' is ' + name);
}

var user = { 
  id: 42, 
  displayName: 'JD',
  fullName: { 
      firstName: 'John',
      lastName: 'Doe'
  }
};

console.log('userId: ' + userId(user)); // "userId: 42"
//值得傳入參數
whois(user); // "JD is John"