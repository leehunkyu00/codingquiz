from heapq import heappush, heappop

def solution(jobs):
    jobs.sort(key=lambda x: x[0], reverse=True)
    nums = len(jobs)
    workingTime = 0
    heap = []
    time = 0

    while jobs:
        while jobs and jobs[-1][0] <= time:
            start, duration = jobs.pop()
            heappush(heap, (duration, start))

        if not heap:
            start, duration = jobs.pop()
            heappush(heap, (duration, start))
            time = start

        duration, start = heappop(heap)
        time += duration
        workingTime += time - start

    while heap:
        duration, start = heappop(heap)
        time += duration
        workingTime += time - start

    return workingTime//nums

jobs = [[24, 10], [18, 39], [34, 20], [37, 5], [47, 22], [20, 47], [15, 34], [15, 2], [35, 43], [26, 1]]      # 74
print(solution(jobs))

jobs = [ [ 1, 146 ],
  [ 2, 7 ],
  [ 2, 9 ],
  [ 8, 21 ],
  [ 19, 20 ],
  [ 22, 36 ],
  [ 22, 148 ],
  [ 28, 38 ],
  [ 39, 26 ],
  [ 43, 81 ],
  [ 49, 63 ],
  [ 50, 33 ],
  [ 68, 36 ],
  [ 75, 76 ],
  [ 84, 39 ],
  [ 117, 60 ],
  [ 135, 99 ],
  [ 142, 32 ],
  [ 174, 111 ],
  [ 195, 179 ] ]    # 422
print(solution(jobs))
