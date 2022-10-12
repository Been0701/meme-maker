const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 일종의 붓
canvas.width = 800; // 도화지 크기 설정
canvas.height = 800; // 도화지의 왼쪽 상단 모서리부터 좌표 시작

ctx.rect(50, 50, 100, 100); // 해당 좌표로부터 너비, 높이 정하기 (안 보임)
ctx.rect(150,150, 100, 100);
ctx.fill(); // 색 채우기
ctx.moveTo(250,250); // 선 안 긋고 해당 좌표로 이동 (시작 포인트)
ctx.lineTo(350,250); // 이어서 그어질 선 (아직 안 보임)
ctx.lineTo(350,350);
ctx.lineTo(250,350);
ctx.lineTo(250,250);
ctx.lineWidth = 5; // path에 상관없이 쭉 적용됨
ctx.stroke(); // 선 그리기

ctx.beginPath(); // 새 경로를 만듦으로써 위 사각형들과 다른 경로에서 그려짐
ctx.fillStyle = "green"; // 따라서, 스타일 변경(색상)이 아래 사각형에만 적용
ctx.rect(350,350, 100,100);
setTimeout(() => {ctx.fill();}, 1000); 

// 집 그리기
ctx.moveTo(250,550);
ctx.lineTo(350,450);
ctx.lineTo(450,450);
ctx.lineTo(550,550);
ctx.lineTo(250,550);
ctx.stroke();

ctx.fillRect(250,550,10,300);
ctx.fillRect(545,550,10,300);
ctx.fillRect(370,670,70,120);

