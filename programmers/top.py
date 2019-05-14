# https://programmers.co.kr/learn/courses/30/lessons/42588?language=python3
# 스택/큐, 탑

# 채점 결과
# 정확성: 100.0
# 합계: 100.0 / 100.0

def solution(heights):
    # answer = []
    answer = [0] * len(heights) # this is edge

    idx = len(heights) - 1

    while idx >= 0:

        fndIdx = idx
        while fndIdx >= 0:
            if heights[fndIdx] > heights[idx]:
                answer[idx] = fndIdx + 1
                break
            
            fndIdx -= 1

        idx -= 1
 
    return answer


heights = [6, 9, 5, 7, 4]    # [0, 0, 2, 2, 4] 
solution(heights)