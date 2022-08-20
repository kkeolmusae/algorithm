# Decorator

Decorator 란? 클래스 선언, 메서드, 접근자, 프로퍼티 또는 매개변수에 첨부할 수 있는 특수한 종류의 선언이다

Decorator는 @(골뱅이) 로 표현된다. (자바의 @(Annotation)과는 개념이 조금 다름)

TypeScript는 다음과 같이 Decorator를 지원한다.
```
클래스(class)
메소드(method)
파라미터(parameter)
프로퍼티(property)
```

## Class Decorator(클래스 데코레이터)

클래스 데코레이터를 이용하면 클래스에서 정의하지 않은 속성을 정의할 수 있다.

## Method Decorator(메서드 데코레이터)

메서드 데코레이터를 이용하면 메서드 선언을 확인, 수정, 교체하는데 사용될 수 있다.

메서드 데코레이터 함수가 전달받는 인자는 총 3가지(target, prop, descriptor)이다. 

## Property Decorator(프로퍼티 데코레이터)

프로퍼티 데코레이터는 프로퍼티 선언을 확인, 수정 교체하는데 사용될 수 있다.

전달받는 인자는 총 2가지(target, prop)이다.

## Parameter Decorator(매개변수 데코레이터)

매개변수 데코레이터는 클래스 생성자 함수 또는 메서드의 매개변수에 사용될 수 있다.

전달 받는 인자는 총 3가지(target, prop, parameter_index)이다.


