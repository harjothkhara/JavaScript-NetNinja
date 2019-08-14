// Regular Expressions(RegEx)

// Exact match i.e no characters before or after --> ^ninja$

// Match any one letter a-z -> use a character set inside [] ---> ^[a-z]$ this will only match a single letter between a-z

// Match any one letter between a-z that also includes capital letters --> ^[a-zA-Z]$

// Matching a word between 6-10 characters long a-z, A-Z, includes capitals. We want this range of characters a-z, A-Z to be typed out between 6- 10 letter long, essentially a word. --> ^[a-zA-Z]{6,10}$
  //Helloooooo

// Matching a word between 6-10 characters long a-z, A-Z, includes numbers --> ^[a-zA-Z0-9]{6,10}$
  //Ninja123

  // Any characters between 6-10 characters --> ^.{6,10}$
