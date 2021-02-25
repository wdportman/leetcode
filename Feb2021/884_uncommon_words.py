from collections import Counter

def uncommonFromSentences(A: str, B: str):
  output = []
  A_words = Counter(A.split(' '))
  B_words = Counter(B.split(' '))
  for word in A_words:
    if A_words[word] == 1 and word not in B_words:
      output.append(word)
  for word in B_words:
    if B_words[word] == 1 and word not in A_words:
      output.append(word)
  return output

print (uncommonFromSentences("will hi squash", "will bye bye pumpkin"))