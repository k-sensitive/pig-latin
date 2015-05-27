describe('pigLatin', function() {
  it('adds ay to the end for words that start with a vowel', function(){
    expect(pigLatin('apple')).to.equal('appleay');
  });

  it('moves first letter to the end of a word if it starts with a consonant', function(){
    expect(pigLatin('pig')).to.equal('igpay');
  });

  it('moves all letters to the end of a word that are consonants', function(){
    expect(pigLatin('prancer')).to.equal('ancerpray');
  });

  it('moves qu to end of a phrase if u is the first vowel in a phrase, function()', function(){
    expect(pigLatin('unique')).to.equal('uniqueay');
  });

  it('translates entire phrase into pig latin', function(){
    expect(pigLatin('here we go again')).to.equal('erehay eway ogay againay');
  });

  it('handles casing in the phrase', function(){
    expect(pigLatin('Octocat')).to.equal('Octocatay');
  });

  it('handles punctuation in the phrase', function(){
    expect(pigLatin('Octocat!')).to.equal('Octocatay!');
  });

});
