## rockPaperScissors

**문제**
가위바위보 게임은 2인 이상의 사람이 동시에 '가위, 바위, 보'를 외치고 동시에 가위, 바위 또는 보 중에서 한가지를 의미하는 손 모양을 내밍어 승부를 결정짓는 게임이다. 세 판의 가위바위보 게임을 할 경우,
한 사람은 세 번의 선택(ex. 가위, 바위, 보)을 할 수 있습니다. 세번의 선택으로 가능한 모든 경우의 수를 구하는 함수를 작성하시오.

**입력**
- 없음

**출력**
- 2차원 배열(`arr[i]`)을 리턴해야 합니다.
- `arr[i]`는 전체 경우의 수 중 한가지 경우를 의미하는 배열.
- `arr[i]`는 'rock', 'paper', 'scissors'중 한 가지 이상을 요소로 갖는 배열
- `arr[i].length`는 3

**입출력 예시**

let output = rockPaperScissors();

console.log(output);
/*
    [
      ["rock", "rock", "rock"],
      ["rock", "rock", "paper"],
      ["rock", "rock", "scissors"],
      ["rock", "paper", "rock"],
      // ...etc ...
    ]
  */

  **Advanced**
  
  - 가위바위보 게임의 수를 나타내는 양의 정수 rounds가 주어질 경우, 해당 rounds 동안 선택할 수 있는 모든 경우의 수를 리턴하도록 함수를 작성해 보시오.

  let output = rockPaperScissors(5);

console.log(output);
/*
    [
      ["rock", "rock", "rock", "rock", "rock"],
      ["rock", "rock", , "rock", "rock", "paper"],
      ["rock", "rock", , "rock", "rock", "scissors"],
      ["rock", "rock", "rock", "paper", "rock"],
      ["rock", "rock", "rock", "paper", "paper"],
      ["rock", "rock", "rock", "paper", "scissors"],
      ["rock", "rock", "rock", "scissors", "rock"],
      // ...etc ...
    ]
  */