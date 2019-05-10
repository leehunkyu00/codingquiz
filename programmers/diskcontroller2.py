# peer coding : from heapq import heappush, heappop

from heapq import heappush, heappop

def solution(jobs):
    jobs.sort(key=lambda x: x[0])
    nums = len(jobs)
    heap = []
    working_time = 0
    time = 0
    
    while len(jobs) > 0:
        while jobs and jobs[0][0] <= time:
            start, duration = jobs.pop(0)
            heappush(heap, (duration, start))

        if not heap:
            time = jobs[0][0]
        else :
            duration, start = heappop(heap)
            time += duration
            working_time += time - start

    while heap:
            duration, start = heappop(heap)
            time += duration
            working_time += time - start

    return int(working_time / nums)
        

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
#jobs = [[0, 3], [1, 9], [2, 6]]
print(solution(jobs))