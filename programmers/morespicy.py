# https://programmers.co.kr/learn/courses/30/lessons/42626?language=python3
# 힙(Heap) > 더 맵게


# 정확성: 76.2
# 효율성: 0.0
# 합계: 76.2 / 100.0
def solution(scoville, K):
    try:
        answer = 0
        score = 0

        scoville.sort()

        for i in range(len(scoville)):
            if scoville[i] > K:
                del scoville[i:]
                break

        while scoville[0] < K:
            # sort
            tmp = scoville[:2]      # slice
            del scoville[:2]        # delete arr

            # cal : arr[0] + arr[1] * 2
            score = tmp[0] + tmp[1] * 2
            scoville.insert(0, score)
            scoville.sort()

            answer += 1

        return answer
    except:
        return -1


#print(solution([1, 2, 3, 9, 10, 12], 7))
#print(solution([1, 2], 3))


# Using heapq
# 정확성: 76.2
# 효율성: 23.8
# 합계: 100.0 / 100.0
import heapq

def solution2(scoville, K):
    heapq.heapify(scoville)
    loop = 0

    min1 = heapq.heappop(scoville)
    while min1 < K:
        try:
            min2 = heapq.heappop(scoville)
        except:
            return -1
        heapq.heappush(scoville, min1 + min2 * 2)

        min1 = heapq.heappop(scoville)
        loop += 1
    
    return loop

print(solution2([1, 2, 3, 9, 10, 12], 7))

