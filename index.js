class Formatter {
  static capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
    
  }
  static titleize(sentence){
    let exceptions = [ 'a', 'an', 'and', 'at', 'but', 'by', 'of', 'the', 'for', 'from']
    let result = []
    let wordsInSentence = sentence.split(' ')
    for(let el of wordsInSentence){
     if(!exceptions.includes(el) || el === wordsInSentence[0]){
        el = this.capitalize(el)
      } 
      result.push(el)
    }
    return result.join(' ')
  }
}

