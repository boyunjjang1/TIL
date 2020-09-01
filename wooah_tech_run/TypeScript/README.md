# TypeScript


##### 1. TypeScript의 장점
    - JS의 자료형이 존재하지 않는 단점 극복(Type에 대한 에러방지)
        - 서비스를 운영할 때 테스트할 때 발견되지 않았던 버그가 생길 수 있다.
    - JS의 슈퍼셋으로 JS 호환 됨
    - 변수가 명시적이다.
        - 다른 개발자가 코드를 보았을 때 이해가 쉽다.
    - Tutorial 잘되어있음
    - 여러가지 패러다임 활용 가능
        - 절차지향
        - 객체지향
        - 함수형
    - 거의 대부분 compiletime이다.
        
##### 2. TypeScript의 단점
    - 가독성이 떨어진다.
    - 결국, JS에서 생기는 오류를 피할 수는 없다.
   
========
    
###### Interfaces vs. Type Aliases
- Type alias는 Interface처럼 동작한다.

- 차이점: 
    - 1) interface는 여러곳에서 사용되는 새로운 이름을 만든다
    - 2) Type alias는 만들지 않는다.
    - ex) error message는 alias 이름을 사용하지 않는다.
 ```
type Alias = { num: number }
interface Interface {
  num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;
```
- 위 코드를 보면 interface는 interface를 return
- aliased는 객체 리터럴 타입을 보여준다.