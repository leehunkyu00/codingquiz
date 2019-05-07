# https://programmers.co.kr/learn/courses/30/lessons/42626?language=python3
# 힙(Heap) > 더 맵게
#
# 정확성: 57.1
# 효율성: 0.0
# 합계: 57.1 / 100.0

def solution(scoville, K):
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


print(solution([1, 2, 3, 9, 10, 12], 7))
print(solution([1, 2], 3))