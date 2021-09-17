class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    // your shape instance generated here

    // this.resize를 인스턴스에 바인딩하고, 이벤트 캡쳐링 차단.
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    // 리페인트되기 전에 애니메이션 업데이트해서 부드러운 애니메이션 구현. 60fps 목표.
    requestAnimationFrame(this.animate.bind(this));
  }

  // 브라우저 크기에 따라 canvas 크기 수정
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    // 고해상도(레티나) 화면에서의 선명도를 위해 캔버스 크기의 2배를 html상의 가로, 세로 길이에 줍니다.
    // 4k 촬영 => fhd로 압축하는 원리와 비슷
    this.ctx.scale(2, 2);

    // your shape resize here
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight); // 전에 있던 그림 지워야죠
    requestAnimationFrame(this.animate.bind(this));

    // your animation here
  }
}

// Domcontents가 로드되었을 때 로드해도 되고, window가 load되었을 때 해도 되고 맘대로 하셈
window.onload = () => {
  new App();
};
