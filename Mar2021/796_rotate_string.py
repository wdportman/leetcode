def rotateString(A: str, B: str):
  if len(A) != len(B):
    return False
  double_B = B + B
  if A in double_B:
    return True
  return False

print(rotateString('aa', 'a'))