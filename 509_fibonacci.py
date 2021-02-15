def fib(n: int) -> int:
  fib_nums = []
  for i in range(n+1):
    if i == 0:
      new_num = 0
    if i == 1:
      new_num = 1
    if i > 1:
      new_num = fib_nums[i-2] + fib_nums[i-1]
    fib_nums.append(new_num)
  return fib_nums[n]

print(fib(1))