

def addition(x):
	x = x+ 1
	return x

def sum(a,b):
	return a + addition(b)
print(sum(1,2))


class car:
			owner=""
			def go(self):
				print("go!")
				
mycar = car()
myfriendcar = car()

mycar.owner = "Dave"
print(mycar.owner)

myfriendcar.owner="Nick"
print(myfriendcar.owner)


## 알고리즘을 구현하기 위해 구현할 내용을 문장으로 작성하자. 처리할 내용들을 시각화로 그려보자. 그 이후에 프로그램을 만들자. 이전에 c 수업 들었을때 프로그래밍 접근 방법과 동일하게 접근해보자.


# 숫자 크기 순으로 정렬하는 알고리즘을 적용한 함수

totalData = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]

def qsort(data):
	if len(data) <= 1:
		return data
	else:
		pivot = data[0]
		less, equal, more = [], [], []
		
		for index in range(len(data)):
			if pivot > data[index]:
					less.append(data[index])
		
			elif pivot < data[index]:
					more.append(data[index])
	
			else:
					equal.append(data[index])
		
		return qsort(less) + equal + qsort(more)
	
print(qsort(totalData))
