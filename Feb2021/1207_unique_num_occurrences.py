# class Solution:
#     def uniqueOccurrences(self, arr: List[int]) -> bool:

def uniqueOccurrences(arr:[int]):
  num_times = {}
  for value in arr:
    if value in num_times:
      num_times[value] += 1
    else:
      num_times[value] = 1
  frequencies = list(num_times.values())
  if len(frequencies) == len(set(frequencies)):
    return True
  else:
    return False

print(uniqueOccurrences([3,3,3,4,4,4]))