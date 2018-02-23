/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var first,second,third,lovers=0,chislo=1;
  preferences.unshift(0);
  for (chislo;chislo<preferences.length;chislo++)
  {
    if (preferences[chislo]>0 && preferences[chislo]!=chislo)
    {
      first=chislo;
      second=preferences[first];
      third=preferences[second];
      //console.log(chislo,'i',first,'f',second,'s',third,'t');
      if (first==preferences[third])
      {
        lovers=lovers+1;
        preferences[first]=0;
        preferences[second]=0;
        preferences[third]=0;
      }
    }
  }
  return lovers;
};
